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
Object.defineProperty(exports, "__esModule", { value: true });
const spl_token_1 = require("@solana/spl-token");
const web3_js_1 = require("@solana/web3.js");
function transfer(connection, owner, fromTokenAccount, tokenMint, toTokenAccount, amountToTransfer = 1) {
    return __awaiter(this, void 0, void 0, function* () {
        const transferTx = new web3_js_1.Transaction();
        transferTx.add((0, spl_token_1.createTransferCheckedInstruction)(fromTokenAccount, tokenMint, toTokenAccount, owner.publicKey, amountToTransfer, 0, []));
        return (0, web3_js_1.sendAndConfirmTransaction)(connection, transferTx, [owner]);
    });
}
exports.default = transfer;
//# sourceMappingURL=transfer.js.map