"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bn_js_1 = require("bn.js");
function percentToBasisPoints(percent) {
    return new bn_js_1.BN(percent).mul(new bn_js_1.BN(100));
}
exports.default = percentToBasisPoints;
//# sourceMappingURL=percentToBasisPoints.js.map