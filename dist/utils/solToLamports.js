"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const web3_js_1 = require("@solana/web3.js");
function solToLamports(sol) {
    return sol * web3_js_1.LAMPORTS_PER_SOL;
}
exports.default = solToLamports;
//# sourceMappingURL=solToLamports.js.map