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
const instructions_1 = require("../instructions");
function createTokenAccount(connection, mint, owner) {
    return __awaiter(this, void 0, void 0, function* () {
        const keypair = web3_js_1.Keypair.generate();
        const balanceNeeded = yield (0, spl_token_1.getMinimumBalanceForRentExemptAccount)(connection);
        const createAccountIx = web3_js_1.SystemProgram.createAccount({
            fromPubkey: owner.publicKey,
            lamports: balanceNeeded,
            newAccountPubkey: keypair.publicKey,
            programId: spl_token_1.TOKEN_PROGRAM_ID,
            space: spl_token_1.AccountLayout.span,
        });
        const tokenAccountIx = (0, instructions_1.createTokenAccountIx)(mint, owner.publicKey, keypair.publicKey);
        const transaction = new web3_js_1.Transaction();
        transaction.add(createAccountIx);
        transaction.add(tokenAccountIx);
        // Order of signers matters—first signer is fee payer
        yield (0, web3_js_1.sendAndConfirmTransaction)(connection, transaction, [owner, keypair]);
        return keypair.publicKey;
    });
}
exports.default = createTokenAccount;
//# sourceMappingURL=createTokenAccount.js.map