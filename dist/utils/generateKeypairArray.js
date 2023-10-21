"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const web3_js_1 = require("@solana/web3.js");
function generateKeypairArray(size) {
    return new Array(size).fill(null).map((_) => web3_js_1.Keypair.generate());
}
exports.default = generateKeypairArray;
//# sourceMappingURL=generateKeypairArray.js.map