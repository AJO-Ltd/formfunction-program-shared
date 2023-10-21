"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bn_js_1 = __importDefault(require("bn.js"));
function basisPointsToPercent(bp) {
    return new bn_js_1.default(bp).div(new bn_js_1.default(100));
}
exports.default = basisPointsToPercent;
//# sourceMappingURL=basisPointsToPercent.js.map