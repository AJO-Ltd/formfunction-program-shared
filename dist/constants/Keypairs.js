"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ANTI_BOT_DEV_AUTHORITY_KEYPAIR = void 0;
const web3_js_1 = require("@solana/web3.js");
// Private key for the local/dev/test bot signer keypair. A different keypair
// is used on mainnet.
exports.ANTI_BOT_DEV_AUTHORITY_KEYPAIR = web3_js_1.Keypair.fromSecretKey(
// REPLACEME
Uint8Array.from([250, 150, 109, 5, 76, 17, 198, 83, 227, 78, 46, 220, 185, 102, 102, 119, 38, 132, 166, 90, 190, 250, 68, 20, 236, 75, 164, 175, 30, 243, 87, 125, 195, 160, 79, 19, 84, 16, 10, 172, 121, 83, 35, 85, 92, 209, 61, 107, 246, 206, 229, 6, 41, 53, 9, 250, 145, 162, 169, 9, 123, 157, 120, 166]));
//# sourceMappingURL=Keypairs.js.map