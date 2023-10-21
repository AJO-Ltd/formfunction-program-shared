"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MaxSupportedTransactionVersion_1 = __importDefault(require("../constants/MaxSupportedTransactionVersion"));
const SIGNATURE_SIZE = 64;
// See https://docs.solana.com/developing/programming-model/transactions#compact-u16-format
function getSignatureLengthBytes(signatureLength) {
    if (signatureLength <= Math.pow(2, 7) - 1) {
        return 1;
    }
    if (signatureLength <= Math.pow(2, 14) - 1) {
        return 2;
    }
    return 3;
}
// Lifted from https://github.com/formfunction-hq/formfn-monorepo/blob/main/packages/server/src/utils/solana/txs/getTransactionSizeInBytes.ts
function estimateTransactionSizeInBytes(txid, connection) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield connection.getTransaction(txid, {
            commitment: "confirmed",
            maxSupportedTransactionVersion: MaxSupportedTransactionVersion_1.default,
        });
        if (response == null) {
            return null;
        }
        const { message } = response.transaction;
        return (
        // Implementation based on Solana Explorer's https://github.com/solana-labs/solana/blob/master/explorer/src/pages/inspector/InspectorPage.tsx#L316
        // They show tx size on their Inspect page, e.g. https://explorer.solana.com/tx/42BHJY3YNyqe6YM7R2md53MV19KUMVLzFk9sqW1QUQ3VxE8dFQQmZEsECV5LFwuk5J6rJ3W32XqyZGTAJPQaTeUo/inspect
        message.serialize().length +
            message.header.numRequiredSignatures * SIGNATURE_SIZE +
            getSignatureLengthBytes(message.header.numRequiredSignatures));
    });
}
exports.default = estimateTransactionSizeInBytes;
//# sourceMappingURL=estimateTransactionSizeInBytes.js.map