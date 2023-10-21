"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const spl_token_1 = require("@solana/spl-token");
const web3_js_1 = require("@solana/web3.js");
function createAccountIx(wallet, mint, minRentLamports) {
    return web3_js_1.SystemProgram.createAccount({
        fromPubkey: wallet,
        lamports: minRentLamports,
        newAccountPubkey: mint,
        programId: spl_token_1.TOKEN_PROGRAM_ID,
        space: spl_token_1.MintLayout.span,
    });
}
exports.default = createAccountIx;
//# sourceMappingURL=createAccountIx.js.map