"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const web3_js_1 = require("@solana/web3.js");
function stringToPublicKey(key) {
    if (key == null) {
        return null;
    }
    try {
        return new web3_js_1.PublicKey(key);
    }
    catch (_a) {
        return null;
    }
}
exports.default = stringToPublicKey;
//# sourceMappingURL=stringToPublicKey.js.map