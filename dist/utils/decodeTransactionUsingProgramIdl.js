"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const anchor_1 = require("@project-serum/anchor");
const arePublicKeysEqual_1 = __importDefault(require("../utils/arePublicKeysEqual"));
function getInstructionFromIdl(idl, name) {
    var _a;
    return (_a = idl.instructions.find((ix) => ix.name === name)) !== null && _a !== void 0 ? _a : null;
}
function decodeInstructionAccounts(idlInstruction, transactionInstructionAccounts, transactionAccountKeys) {
    return idlInstruction.accounts.map((account, index) => {
        const pubkey = transactionInstructionAccounts[index];
        const transactionAccount = transactionAccountKeys.find((val) => (0, arePublicKeysEqual_1.default)(val.pubkey, pubkey));
        return {
            isMut: transactionAccount.writable,
            isSigner: transactionAccount.signer,
            name: account.name,
            pubkey,
        };
    });
}
function decodeInstruction(ixCoder, ix) {
    var _a;
    return ixCoder.decode((_a = ix.data) !== null && _a !== void 0 ? _a : "", "base58");
}
function parseIdlInstruction(idlInstruction, decodedInstruction, transactionInstruction, parsedTransaction) {
    var _a, _b;
    const ixAccounts = transactionInstruction.accounts;
    const labelledIxAccounts = decodeInstructionAccounts(idlInstruction, ixAccounts, parsedTransaction.transaction.message.accountKeys);
    const accountsMap = labelledIxAccounts.reduce((result, account) => {
        return Object.assign(Object.assign({}, result), { [account.name]: account });
    }, {});
    const data = decodedInstruction.data;
    const decodedTransaction = Object.assign(Object.assign({}, decodedInstruction), { data, logs: (_b = (_a = parsedTransaction === null || parsedTransaction === void 0 ? void 0 : parsedTransaction.meta) === null || _a === void 0 ? void 0 : _a.logMessages) !== null && _b !== void 0 ? _b : [] });
    return {
        decodedTransaction: Object.assign({ accountsMap }, decodedTransaction),
        name: decodedInstruction.name,
    };
}
/**
 * Decodes a transaction using an Anchor generated program IDL.
 *
 * This function expects a concrete return type to be passed in, which can be
 * derived from the specific program's IDL, like this:
 * https://github.com/formfunction-hq/formfn-auction-house/blob/2c9ac2e2a1905440385612daa30da6688165a390/src/utils/tx-parsing/DecodedAuctionHouseTransactionResult.ts#L4
 */
function decodeTransactionUsingProgramIdl(idl, programId, parsedTransaction) {
    var _a, _b, _c;
    try {
        const ixCoder = new anchor_1.BorshInstructionCoder(idl);
        const instructions = (_c = (_b = (_a = parsedTransaction.transaction) === null || _a === void 0 ? void 0 : _a.message) === null || _b === void 0 ? void 0 : _b.instructions) !== null && _c !== void 0 ? _c : [];
        const result = instructions
            .map((instruction) => {
            // The following may throw if the IDL which is being used does not actually
            // match the program IDL, which may happen for some legacy transactions where
            // we didn't actually record the changed IDLs correctly.
            try {
                if (!(0, arePublicKeysEqual_1.default)(instruction.programId, programId)) {
                    return null;
                }
                const decodedInstruction = decodeInstruction(ixCoder, instruction);
                if (decodedInstruction != null) {
                    const idlInstruction = getInstructionFromIdl(idl, decodedInstruction.name);
                    if (idlInstruction != null) {
                        return parseIdlInstruction(idlInstruction, decodedInstruction, instruction, parsedTransaction);
                    }
                }
                return null;
            }
            catch (err) {
                return null;
            }
        })
            .reduce((decodedTransactionResult, decodedIx) => {
            if (decodedIx != null) {
                const { name, decodedTransaction } = decodedIx;
                return Object.assign(Object.assign({}, decodedTransactionResult), { [name]: decodedTransaction });
            }
            else {
                return decodedTransactionResult;
            }
        }, {});
        return Object.keys(result).length > 0
            ? result
            : null;
    }
    catch (err) {
        return null;
    }
}
exports.default = decodeTransactionUsingProgramIdl;
//# sourceMappingURL=decodeTransactionUsingProgramIdl.js.map