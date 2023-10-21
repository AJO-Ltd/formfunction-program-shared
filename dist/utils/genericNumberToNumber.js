"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bn_js_1 = require("bn.js");
function genericNumberToNumber(gn) {
    if (bn_js_1.BN.isBN(gn)) {
        return gn.toNumber();
    }
    if (typeof gn === "string") {
        return Number(gn);
    }
    return gn;
}
exports.default = genericNumberToNumber;
//# sourceMappingURL=genericNumberToNumber.js.map