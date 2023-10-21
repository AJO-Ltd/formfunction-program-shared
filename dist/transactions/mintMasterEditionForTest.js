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
const accounts_1 = require("../accounts");
const createNftMint_1 = __importDefault(require("../instructions/createNftMint"));
const pdas_1 = require("../pdas");
const createAta_1 = __importDefault(require("../transactions/createAta"));
const createMasterEdition_1 = __importDefault(require("../transactions/createMasterEdition"));
const createMetadata_1 = __importDefault(require("../transactions/createMetadata"));
const mintTo_1 = __importDefault(require("../transactions/mintTo"));
function getTestMetadata() {
    return {
        creators: null,
        name: "test",
        sellerFeeBasisPoints: 0,
        symbol: "test",
        uri: "test",
    };
}
function mintMasterEditionForTest(wallet, connection) {
    return __awaiter(this, void 0, void 0, function* () {
        const tokenMint = yield (0, createNftMint_1.default)(connection, wallet);
        const [ata] = (0, pdas_1.findAtaPda)(wallet.publicKey, tokenMint);
        const tokenAccountExists = yield connection.getAccountInfo(ata);
        if (!tokenAccountExists) {
            yield (0, createAta_1.default)(connection, tokenMint, wallet.publicKey, wallet);
        }
        const [metadata] = (0, pdas_1.findTokenMetadataPda)(tokenMint);
        const metadataExists = yield connection.getAccountInfo(metadata);
        if (!metadataExists) {
            yield (0, createMetadata_1.default)(connection, wallet, tokenMint, wallet.publicKey, wallet.publicKey, getTestMetadata());
        }
        const tokenBalance = yield (0, accounts_1.getTokenBalance)(connection, ata);
        if (tokenBalance < 1) {
            yield (0, mintTo_1.default)(connection, tokenMint, ata, wallet.publicKey, [wallet], 1);
        }
        const [editionPda] = (0, pdas_1.findEditionPda)(tokenMint);
        const masterEditionExists = yield connection.getAccountInfo(editionPda);
        if (!masterEditionExists) {
            yield (0, createMasterEdition_1.default)(connection, wallet, editionPda, tokenMint, wallet.publicKey, wallet.publicKey, metadata);
        }
        return tokenMint;
    });
}
exports.default = mintMasterEditionForTest;
//# sourceMappingURL=mintMasterEditionForTest.js.map