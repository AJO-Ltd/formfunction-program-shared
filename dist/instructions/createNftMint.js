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
const spl_token_1 = require("@solana/spl-token");
function createNftMint(connection, wallet, mintAuthority, freezeAuthority) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, spl_token_1.createMint)(connection, wallet, mintAuthority !== null && mintAuthority !== void 0 ? mintAuthority : wallet.publicKey, freezeAuthority !== null && freezeAuthority !== void 0 ? freezeAuthority : wallet.publicKey, 0);
    });
}
exports.default = createNftMint;
//# sourceMappingURL=createNftMint.js.map