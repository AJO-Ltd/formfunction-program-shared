"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const web3_js_1 = require("@solana/web3.js");
function ixsToTx(ixs) {
    const tx = new web3_js_1.Transaction();
    ixs.forEach((ix) => tx.add(ix));
    return tx;
}
exports.default = ixsToTx;
//# sourceMappingURL=ixsToTx.js.map