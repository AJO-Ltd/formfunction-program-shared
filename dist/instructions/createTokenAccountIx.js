"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const spl_token_1 = require("@solana/spl-token");
function createTokenAccountIx(mint, owner, account) {
    return (0, spl_token_1.createInitializeAccountInstruction)(account, mint, owner);
}
exports.default = createTokenAccountIx;
//# sourceMappingURL=createTokenAccountIx.js.map