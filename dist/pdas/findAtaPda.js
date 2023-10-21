"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const spl_token_1 = require("@solana/spl-token");
const web3_js_1 = require("@solana/web3.js");
function findAtaPda(wallet, mint) {
    return web3_js_1.PublicKey.findProgramAddressSync([wallet.toBuffer(), spl_token_1.TOKEN_PROGRAM_ID.toBuffer(), mint.toBuffer()], spl_token_1.ASSOCIATED_TOKEN_PROGRAM_ID);
}
exports.default = findAtaPda;
//# sourceMappingURL=findAtaPda.js.map