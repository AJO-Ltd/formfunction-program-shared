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
const findEditionPda_1 = __importDefault(require("../pdas/findEditionPda"));
function getLimitedEdition(connection, mint) {
    return __awaiter(this, void 0, void 0, function* () {
        const [editionPda] = (0, findEditionPda_1.default)(mint);
        const edition = yield mpl_token_metadata_1.Edition.fromAccountAddress(connection, editionPda);
        return edition;
    });
}
exports.default = getLimitedEdition;
//# sourceMappingURL=getLimitedEdition.js.map