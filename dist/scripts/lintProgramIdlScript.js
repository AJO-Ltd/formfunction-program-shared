"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const fs_1 = require("fs");
const path_1 = require("path");
const tiny_invariant_1 = __importDefault(require("tiny-invariant"));
function readIdl(path) {
    // Node 'require' has a cache and we need to bust it to ensure we're reading
    // the most recent version of the file.
    // Ref: https://nodejs.org/api/modules.html#caching
    delete require.cache[path];
    // eslint-disable-next-line
    const idl = require(path).IDL;
    (0, tiny_invariant_1.default)(idl != null, `Couldn't read IDL at path ${path}`);
    return idl;
}
function getInstructionsAccountMapFromIdl(idl) {
    return idl.instructions.reduce((result, ix) => {
        return Object.assign(Object.assign({}, result), { [ix.name]: ix.accounts.map((account) => account.name) });
    }, {});
}
function checkForBreakingChanges(oldIdl, newIdl) {
    const oldIdlInstructions = getInstructionsAccountMapFromIdl(oldIdl);
    const newIdlInstructions = getInstructionsAccountMapFromIdl(newIdl);
    const changeSummaries = [];
    for (const [ixName, oldIxAccounts] of Object.entries(oldIdlInstructions)) {
        const changeSummary = { errors: [], ixName, warnings: [] };
        if (!(ixName in newIdlInstructions)) {
            changeSummary.errors.push(`- [Instruction Removed]: The "${ixName}" instruction was removed.`);
            changeSummaries.push(changeSummary);
            // If the instruction was removed or isn't present, skip the other checks below.
            continue;
        }
        const newIdlIxAccounts = newIdlInstructions[ixName];
        const newIdlIxAccountSet = new Set(newIdlIxAccounts);
        for (const oldIxAccount of oldIxAccounts) {
            if (!newIdlIxAccountSet.has(oldIxAccount)) {
                changeSummary.errors.push(`- [Account Removed]: The "${oldIxAccount}" account was removed from instruction "${ixName}".`);
            }
        }
        const oldIdlIxAccountSet = new Set(oldIxAccounts);
        for (const newIxAccount of newIdlIxAccounts) {
            if (!oldIdlIxAccountSet.has(newIxAccount)) {
                changeSummary.warnings.push(`- [Account Added]: The "${newIxAccount}" account was added to instruction "${ixName}".`);
            }
        }
        if (changeSummary.errors.length > 0 || changeSummary.warnings.length > 0) {
            changeSummaries.push(changeSummary);
        }
    }
    return changeSummaries;
}
function restoreIdl(idlPath, newIdlFileString) {
    (0, fs_1.writeFileSync)(idlPath, newIdlFileString, "utf-8");
    (0, child_process_1.execSync)(`git add ${idlPath}`);
}
/**
 * This lints an IDL to check for potentially breaking changes during a commit.
 */
function lintProgramIdlScript(idlFilePath) {
    const idlPath = (0, path_1.resolve)(idlFilePath);
    const newIdlFileString = (0, fs_1.readFileSync)(idlPath, "utf-8");
    const newIdl = readIdl(idlPath);
    (0, child_process_1.execSync)(`git restore --staged ${idlPath} --quiet`);
    (0, child_process_1.execSync)(`git checkout ${idlPath} --quiet`);
    const oldIdlFileString = (0, fs_1.readFileSync)(idlPath, "utf-8");
    if (newIdlFileString === oldIdlFileString) {
        console.log("No program IDL changes found.");
        return;
    }
    console.log("\nProgram IDL was changed, running linting script to look for breaking changes...\n");
    const oldIdl = readIdl(idlPath);
    const changeSummaries = checkForBreakingChanges(oldIdl, newIdl);
    const shouldStopCommit = changeSummaries.some((x) => x.errors.length);
    if (changeSummaries.length) {
        console.log("Here are the rules:");
        console.log("- Reordering instruction accounts is a breaking change.");
        console.log("- Removing or renaming instruction accounts is strongly discouraged, unless you know what you're doing.");
        console.log("- You can add new accounts, but may need to add transaction parsing logic for legacy instructions and/or save the previous IDL as a deprecated IDL.");
        console.log("- Removing instructions is a breaking change unless no clients still rely on the removed instruction.");
        console.log("- See more info here: https://www.notion.so/formfunction/Solana-Program-Backwards-Compatibility-18a68a79f6374c43be9b44f063998366");
        console.log("");
        if (shouldStopCommit) {
            console.warn("Commit will be stopped because breaking changes were found. Here are the details:");
        }
        else {
            console.warn("Some potentially breaking changes were found, please read the following carefully:");
        }
        console.log("");
        for (const { ixName, errors, warnings } of changeSummaries) {
            if (errors.length) {
                console.warn(`[ERROR] Instruction: ${ixName}`);
                errors.forEach((error) => console.warn(error));
                console.log("");
            }
            if (warnings.length) {
                console.warn(`[WARN] Instruction: ${ixName}`);
                warnings.forEach((warning) => console.warn(warning));
                console.log("");
            }
        }
        restoreIdl(idlPath, newIdlFileString);
        if (shouldStopCommit) {
            console.warn("If you are confident the changes are ok, please re-run with --no-verify.\n");
            process.exit(1);
        }
    }
    else {
        restoreIdl(idlPath, newIdlFileString);
        console.log("No breaking changes found.\n");
    }
    console.log("Done!");
}
exports.default = lintProgramIdlScript;
//# sourceMappingURL=lintProgramIdlScript.js.map