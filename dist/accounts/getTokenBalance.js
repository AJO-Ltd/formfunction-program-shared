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
Object.defineProperty(exports, "__esModule", { value: true });
function getTokenBalance(connection, tokenAccount) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const tokenAccountBalance = yield connection.getTokenAccountBalance(tokenAccount);
            return Number(tokenAccountBalance.value.amount);
        }
        catch (err) {
            // May throw if token account hasn't been created yet.
            return 0;
        }
    });
}
exports.default = getTokenBalance;
//# sourceMappingURL=getTokenBalance.js.map