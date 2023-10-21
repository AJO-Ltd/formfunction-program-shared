"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const spl_token_1 = require("@solana/spl-token");
function createMintIx({ mint, wallet, decimals, mintAuthority, freezeAuthority, }) {
    return (0, spl_token_1.createInitializeMintInstruction)(mint, decimals !== null && decimals !== void 0 ? decimals : 0, mintAuthority !== null && mintAuthority !== void 0 ? mintAuthority : wallet, freezeAuthority !== null && freezeAuthority !== void 0 ? freezeAuthority : wallet);
}
exports.default = createMintIx;
//# sourceMappingURL=createMintIx.js.map