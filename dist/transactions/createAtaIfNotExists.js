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
const pdas_1 = require("../pdas");
const createAta_1 = __importDefault(require("../transactions/createAta"));
const logIfDebug_1 = __importDefault(require("../utils/logIfDebug"));
function createAtaIfNotExists(connection, owner, tokenMint, payer, label) {
    return __awaiter(this, void 0, void 0, function* () {
        const [tokenAccount] = (0, pdas_1.findAtaPda)(owner, tokenMint);
        const tokenAccountExists = (yield connection.getAccountInfo(tokenAccount)) != null;
        if (!tokenAccountExists) {
            if (label != null) {
                (0, logIfDebug_1.default)(`Creating ${label} ATA at address: ${tokenAccount.toString()}`);
            }
            yield (0, createAta_1.default)(connection, tokenMint, owner, payer);
        }
        return tokenAccount;
    });
}
exports.default = createAtaIfNotExists;
//# sourceMappingURL=createAtaIfNotExists.js.map