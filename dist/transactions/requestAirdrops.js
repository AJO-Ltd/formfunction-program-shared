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
const Environment_1 = __importDefault(require("../constants/Environment"));
const tiny_invariant_1 = __importDefault(require("tiny-invariant"));
const LOCAL_AIRDROP_AMOUNT = 50;
// Note: devnet|testnet airdrop size is limited.
const NON_LOCAL_AIRDROP_AMOUNT = 2;
function requestAirdrops({ wallets, connection, environment = Environment_1.default.Local, amountInSol, }) {
    return __awaiter(this, void 0, void 0, function* () {
        (0, tiny_invariant_1.default)(environment !== Environment_1.default.Production, "Airdropping is not supported on mainnet.");
        const amount = amountInSol != null
            ? amountInSol
            : environment === Environment_1.default.Local
                ? LOCAL_AIRDROP_AMOUNT
                : NON_LOCAL_AIRDROP_AMOUNT;
        if (environment !== Environment_1.default.Local && amount > NON_LOCAL_AIRDROP_AMOUNT) {
            throw new Error(`Airdrop requests are limited to ${NON_LOCAL_AIRDROP_AMOUNT} on non-local networks.`);
        }
        yield Promise.all(wallets.map((wallet) => __awaiter(this, void 0, void 0, function* () {
            const amountInLamports = amount * web3_js_1.LAMPORTS_PER_SOL;
            const signature = yield connection.requestAirdrop("publicKey" in wallet ? wallet.publicKey : wallet, amountInLamports);
            // FIXME: For some reason the following (correct) code failed when used
            // with a 'signature must be base58 encoded' error. Somehow it was importing
            // a wrongly versioned @solana/web3.js library (not sure how).
            // const latestBlockhash = await connection.getLatestBlockhash();
            // const opts = { ...latestBlockhash, signature };
            // await connection.confirmTransaction(opts);
            // For now, using the deprecated approach gets this to work.
            yield connection.confirmTransaction(signature, "confirmed");
        })));
    });
}
exports.default = requestAirdrops;
//# sourceMappingURL=requestAirdrops.js.map