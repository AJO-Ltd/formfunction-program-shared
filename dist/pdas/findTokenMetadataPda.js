"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const web3_js_1 = require("@solana/web3.js");
const ProgramIds_1 = require("../constants/ProgramIds");
function findTokenMetadataPda(mint) {
    return web3_js_1.PublicKey.findProgramAddressSync([
        Buffer.from("metadata"),
        ProgramIds_1.TOKEN_METADATA_PROGRAM_ID.toBuffer(),
        mint.toBuffer(),
    ], ProgramIds_1.TOKEN_METADATA_PROGRAM_ID);
}
exports.default = findTokenMetadataPda;
//# sourceMappingURL=findTokenMetadataPda.js.map