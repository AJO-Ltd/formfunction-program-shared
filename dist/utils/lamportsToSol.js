"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const web3_js_1 = require("@solana/web3.js");
function lamportsToSol(lamports) {
    return lamports / web3_js_1.LAMPORTS_PER_SOL;
}
exports.default = lamportsToSol;
//# sourceMappingURL=lamportsToSol.js.map