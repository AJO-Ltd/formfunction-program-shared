"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bn_js_1 = __importDefault(require("bn.js"));
function convertNumberForIxArg(n) {
    return n == null ? null : new bn_js_1.default(n);
}
exports.default = convertNumberForIxArg;
//# sourceMappingURL=convertNumberForIxArg.js.map