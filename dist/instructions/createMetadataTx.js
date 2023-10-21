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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mpl_token_metadata_1 = require("@metaplex-foundation/mpl-token-metadata");
const ixToTx_1 = __importDefault(require("../instructions/ixToTx"));
const pdas_1 = require("../pdas");
function createMetadataTx(feePayer, mint, mintAuthority, updateAuthority, metadataData) {
    return __awaiter(this, void 0, void 0, function* () {
        const [metadata] = (0, pdas_1.findTokenMetadataPda)(mint);
        const ix = (0, mpl_token_metadata_1.createCreateMetadataAccountInstruction)({
            metadata,
            mint,
            mintAuthority,
            payer: feePayer,
            updateAuthority,
        }, {
            createMetadataAccountArgs: {
                data: metadataData,
                isMutable: true,
            },
        });
        return (0, ixToTx_1.default)(ix);
    });
}
exports.default = createMetadataTx;
//# sourceMappingURL=createMetadataTx.js.map