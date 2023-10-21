"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const fs_1 = require("fs");
const path_1 = require("path");
const tiny_invariant_1 = __importDefault(require("tiny-invariant"));
const uppercaseFirstLetter_1 = __importDefault(require("../utils/uppercaseFirstLetter"));
function readSourceIdlFile(filepath) {
    // eslint-disable-next-line
    const idl = require((0, path_1.resolve)(filepath));
    (0, tiny_invariant_1.default)(idl.IDL != null, `IDL must be exported from file at ${filepath}`);
    return idl.IDL;
}
function sortIxAlphabetically(a, b) {
    if (a.name < b.name) {
        return -1;
    }
    else if (a.name > b.name) {
        return 1;
    }
    else {
        return 0;
    }
}
function handleModifyProgramIdl(idl, programName, outputFile) {
    const instructionsMap = idl.instructions.sort(sortIxAlphabetically).reduce((result, ix) => (Object.assign(Object.assign({}, result), { [ix.name]: ix.accounts.map((account) => account.name) })), {});
    const modifiedIdl = Object.assign(Object.assign({}, idl), { instructionsMap });
    const idlString = `
  export type ${programName} = ${JSON.stringify(modifiedIdl)}
  export const IDL: ${programName} = ${JSON.stringify(modifiedIdl)}`;
    (0, fs_1.writeFileSync)(outputFile, idlString, "utf-8");
    console.log(`Saved modified IDL to ${outputFile}.`);
}
function getStartOfDecodedTransactionResultTypeFile(programName, idlFilePath, decodedTransactionResultTypeFilePath) {
    // e.g. converts "AuctionHouse" to "AUCTION_HOUSE".
    const idlConstantName = programName
        .split(/(?=[A-Z])/)
        .map((val) => val.toUpperCase())
        .join("_");
    // Need to adjust the paths a bit for the imports... This is a bit funky.
    const idlImport = idlFilePath.replace("src/", "").replace(".ts", "");
    const programInstructionNameImport = decodedTransactionResultTypeFilePath
        .replace("src/", "")
        .replace(".ts", "")
        .replace(`Decoded${programName}TransactionResult`, `${programName}InstructionName`);
    return `
  /**
   * NOTE: This is an auto-generated file. Don't edit it directly.
   */
  import { DecodedInstructionAccount, GenericDecodedTransaction } from "@formfunction-hq/formfunction-program-shared";
  import { IDL as ${idlConstantName}_IDL } from "${idlImport}";
  import ${programName}InstructionName from "${programInstructionNameImport}";

  const identity = <T>(val: T): T => val;

  const ixMap = ${idlConstantName}_IDL.instructionsMap ?? {};
  `;
}
function generateTypeInformation(ixName) {
    return `const ${(0, uppercaseFirstLetter_1.default)(ixName)}Accounts = (ixMap.${ixName} ?? []).map(identity);
  `;
}
function generateDefaultExportType(idl, programName) {
    const sortedIxNames = idl.instructions.map((ix) => ix.name).sort();
    const types = sortedIxNames.map((ixName) => {
        return `${ixName}?: GenericDecodedTransaction<${programName}InstructionName> & {
        accountsMap: {
          [Key in typeof ${(0, uppercaseFirstLetter_1.default)(ixName)}Accounts[0]]: DecodedInstructionAccount;
        };
      };`;
    });
    return `type Decoded${programName}TransactionResult = {
      ${types.join("")}
    }

    export default Decoded${programName}TransactionResult;
  `;
}
function generateDecodedTransactionResultType(idl, programName, idlFilePath, decodedTransactionResultTypeFilePath) {
    const sortedIxNames = idl.instructions.map((ix) => ix.name).sort();
    const types = sortedIxNames.map((ixName) => generateTypeInformation(ixName));
    const txResultTypeString = generateDefaultExportType(idl, programName);
    const fileString = `
    ${getStartOfDecodedTransactionResultTypeFile(programName, idlFilePath, decodedTransactionResultTypeFilePath)}
    ${types.join("\n")}
    ${txResultTypeString}
  `;
    (0, fs_1.writeFileSync)(decodedTransactionResultTypeFilePath, fileString, "utf-8");
    console.log(`Saved decoded transaction result type to ${decodedTransactionResultTypeFilePath}.`);
}
function format(file) {
    (0, child_process_1.exec)(`npx prettier --write ${file}`);
}
function lint(file) {
    (0, child_process_1.exec)(`npx eslint --cache --fix ${file} >/dev/null`);
}
// Need to run tools to format the output code.
function formatGeneratedCode(idlOutputFile, decodedTransactionResultTypeFilePath) {
    console.log("Formatting generated code...");
    format(idlOutputFile);
    lint(idlOutputFile);
    format(decodedTransactionResultTypeFilePath);
    lint(decodedTransactionResultTypeFilePath);
}
/**
 * This helper script reads a program ID, modifies it, and generates a new
 * file of types which map the program instruction names to typed account maps.
 *
 * This generated code can then be used to parse program transactions with
 * more type safety.
 */
function modifyProgramIdlScript({ decodedTransactionResultTypeFilePath, idlFilePath, programName, }) {
    const idl = readSourceIdlFile(idlFilePath);
    handleModifyProgramIdl(idl, programName, idlFilePath);
    generateDecodedTransactionResultType(idl, programName, idlFilePath, decodedTransactionResultTypeFilePath);
    formatGeneratedCode(idlFilePath, decodedTransactionResultTypeFilePath);
}
exports.default = modifyProgramIdlScript;
//# sourceMappingURL=modifyProgramIdlScript.js.map