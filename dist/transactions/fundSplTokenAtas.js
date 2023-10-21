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
const createAtaIfNotExists_1 = __importDefault(require("../transactions/createAtaIfNotExists"));
const mintTo_1 = __importDefault(require("../transactions/mintTo"));
const utils_1 = require("../utils");
function fundSplTokenAtas(connection, wallets, splTokenMint, splTokenAuthority, amount = 1) {
    return __awaiter(this, void 0, void 0, function* () {
        return Promise.all(wallets.map((wallet) => __awaiter(this, void 0, void 0, function* () {
            const ata = yield (0, createAtaIfNotExists_1.default)(connection, wallet, splTokenMint, splTokenAuthority);
            yield (0, mintTo_1.default)(connection, splTokenMint, ata, splTokenAuthority.publicKey, [splTokenAuthority], amount);
            const tokenAccountBalance = yield connection.getTokenAccountBalance(ata);
            const tokenAmount = tokenAccountBalance.value.amount;
            (0, utils_1.logIfDebug)(`Funded ${wallet} with ${amount} SPL token(s), current SPL token balance = ${tokenAmount}`);
            return {
                balance: tokenAmount,
                wallet,
            };
        })));
    });
}
exports.default = fundSplTokenAtas;
//# sourceMappingURL=fundSplTokenAtas.js.map