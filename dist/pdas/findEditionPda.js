"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const web3_js_1 = require("@solana/web3.js");
const ProgramIds_1 = require("../constants/ProgramIds");
function findEditionPda(mint) {
    return web3_js_1.PublicKey.findProgramAddressSync([
        Buffer.from("metadata"),
        ProgramIds_1.TOKEN_METADATA_PROGRAM_ID.toBuffer(),
        mint.toBuffer(),
        Buffer.from("edition"),
    ], ProgramIds_1.TOKEN_METADATA_PROGRAM_ID);
}
exports.default = findEditionPda;
//# sourceMappingURL=findEditionPda.js.map