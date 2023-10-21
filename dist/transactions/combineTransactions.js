"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const web3_js_1 = require("@solana/web3.js");
function combineTransactions(transactions, options) {
    const combinedTransaction = new web3_js_1.Transaction(options);
    transactions.forEach((transaction) => transaction.instructions.forEach((instruction) => {
        combinedTransaction.add(instruction);
    }));
    return combinedTransaction;
}
exports.default = combineTransactions;
//# sourceMappingURL=combineTransactions.js.map