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
const SPL_TOKEN_DECIMALS = 0;
function createSplToken(connection, wallet) {
    return __awaiter(this, void 0, void 0, function* () {
        const splTokenMintKeypair = web3_js_1.Keypair.generate();
        const minRentLamports = yield connection.getMinimumBalanceForRentExemption(spl_token_1.MintLayout.span);
        const createAccountIx = web3_js_1.SystemProgram.createAccount({
            fromPubkey: wallet.publicKey,
            lamports: minRentLamports,
            newAccountPubkey: splTokenMintKeypair.publicKey,
            programId: spl_token_1.TOKEN_PROGRAM_ID,
            space: spl_token_1.MintLayout.span,
        });
        const initializeMintIx = (0, instructions_1.createMintIx)({
            decimals: SPL_TOKEN_DECIMALS,
            mint: splTokenMintKeypair.publicKey,
            wallet: wallet.publicKey,
        });
        yield (0, web3_js_1.sendAndConfirmTransaction)(connection, (0, instructions_1.ixsToTx)([createAccountIx, initializeMintIx]), [wallet, splTokenMintKeypair]);
        return splTokenMintKeypair.publicKey;
    });
}
exports.default = createSplToken;
//# sourceMappingURL=createSplToken.js.map