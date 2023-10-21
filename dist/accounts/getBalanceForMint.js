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
const ProgramIds_1 = require("../constants/ProgramIds");
const pdas_1 = require("../pdas");
const tiny_invariant_1 = __importDefault(require("tiny-invariant"));
const utils_1 = require("../utils");
/**
 * Gets the balance for a wallet and a given mint. Mint is optional and will
 * default to the native SOL mint.
 *
 * For token accounts, you can provide token account itself or else it will be
 * derived from the wallet. You must provide only one or the other.
 */
function getBalanceForMint({ tokenAccount, connection, mint = ProgramIds_1.WRAPPED_SOL_MINT, wallet, }) {
    return __awaiter(this, void 0, void 0, function* () {
        (0, tiny_invariant_1.default)((tokenAccount != null && wallet == null) ||
            (wallet != null && tokenAccount == null), "Only one of account or wallet must be non-null.");
        if ((0, utils_1.isMintNative)(mint)) {
            const balance = yield connection.getBalance(wallet);
            return balance;
        }
        else {
            try {
                const ata = tokenAccount !== null && tokenAccount !== void 0 ? tokenAccount : (0, pdas_1.findAtaPda)(wallet, mint)[0];
                const tokenAccountBalance = yield connection.getTokenAccountBalance(ata);
                return Number(tokenAccountBalance.value.amount);
            }
            catch (err) {
                // In cases where the account is not initialized yet, return 0.
                return 0;
            }
        }
    });
}
exports.default = getBalanceForMint;
//# sourceMappingURL=getBalanceForMint.js.map