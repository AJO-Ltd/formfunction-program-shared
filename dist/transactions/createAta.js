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
const web3_js_1 = require("@solana/web3.js");
const createAtaIx_1 = __importDefault(require("../instructions/createAtaIx"));
function createAta(connection, mint, owner, payer) {
    return __awaiter(this, void 0, void 0, function* () {
        const instruction = yield (0, createAtaIx_1.default)(mint, owner, payer.publicKey);
        const transaction = new web3_js_1.Transaction();
        transaction.add(instruction);
        return (0, web3_js_1.sendAndConfirmTransaction)(connection, transaction, [payer]);
    });
}
exports.default = createAta;
//# sourceMappingURL=createAta.js.map