"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const web3_js_1 = require("@solana/web3.js");
const bn_js_1 = __importDefault(require("bn.js"));
const ProgramIds_1 = require("../constants/ProgramIds");
function findEditionMarkerPda(mint, edition) {
    // editions are divided into pages of 31-bytes (248-bits) for more efficient
    // packing to check if an edition is occupied. The offset is determined from
    // the edition passed in through data
    const editionPageNumber = edition.div(new bn_js_1.default(248)).toNumber();
    return web3_js_1.PublicKey.findProgramAddressSync([
        Buffer.from("metadata"),
        ProgramIds_1.TOKEN_METADATA_PROGRAM_ID.toBuffer(),
        mint.toBuffer(),
        Buffer.from("edition"),
        Buffer.from(String(editionPageNumber)),
    ], ProgramIds_1.TOKEN_METADATA_PROGRAM_ID);
}
exports.default = findEditionMarkerPda;
//# sourceMappingURL=findEditionMarkerPda.js.map