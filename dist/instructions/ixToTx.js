"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const web3_js_1 = require("@solana/web3.js");
function ixToTx(ix) {
    const tx = new web3_js_1.Transaction();
    tx.add(ix);
    return tx;
}
exports.default = ixToTx;
//# sourceMappingURL=ixToTx.js.map