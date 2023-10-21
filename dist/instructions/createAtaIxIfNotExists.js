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
const createAtaIx_1 = __importDefault(require("../instructions/createAtaIx"));
const findAtaPda_1 = __importDefault(require("../pdas/findAtaPda"));
function createAtaIxIfNotExists(connection, owner, tokenMint, payer) {
    return __awaiter(this, void 0, void 0, function* () {
        const [ata] = (0, findAtaPda_1.default)(owner, tokenMint);
        const ataAccount = yield connection.getAccountInfo(ata);
        if (ataAccount != null) {
            return null;
        }
        return (0, createAtaIx_1.default)(tokenMint, owner, payer);
    });
}
exports.default = createAtaIxIfNotExists;
//# sourceMappingURL=createAtaIxIfNotExists.js.map