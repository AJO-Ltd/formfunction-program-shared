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
const spl_token_1 = require("@solana/spl-token");
const findAtaPda_1 = __importDefault(require("../pdas/findAtaPda"));
function createAtaIx(mint, owner, wallet) {
    return __awaiter(this, void 0, void 0, function* () {
        const [ata] = (0, findAtaPda_1.default)(owner, mint);
        return (0, spl_token_1.createAssociatedTokenAccountInstruction)(wallet, ata, owner, mint);
    });
}
exports.default = createAtaIx;
//# sourceMappingURL=createAtaIx.js.map