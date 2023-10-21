"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ANTI_BOT_DEV_AUTHORITY_KEYPAIR = void 0;
const web3_js_1 = require("@solana/web3.js");
// Private key for the local/dev/test bot signer keypair. A different keypair
// is used on mainnet.
exports.ANTI_BOT_DEV_AUTHORITY_KEYPAIR = web3_js_1.Keypair.fromSecretKey(
// REPLACEME
Uint8Array.from([0]));
//# sourceMappingURL=Keypairs.js.map