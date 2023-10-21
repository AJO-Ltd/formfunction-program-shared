"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const spl_token_1 = require("@solana/spl-token");
function createMintToIx(mint, dest, mintAuthority, multiSigners, amount) {
    return (0, spl_token_1.createMintToInstruction)(mint, dest, mintAuthority, amount, multiSigners);
}
exports.default = createMintToIx;
//# sourceMappingURL=createMintToIx.js.map