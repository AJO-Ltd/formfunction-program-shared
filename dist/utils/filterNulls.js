"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isNotNull_1 = __importDefault(require("../utils/isNotNull"));
function filterNulls(arr) {
    return arr.filter(isNotNull_1.default);
}
exports.default = filterNulls;
//# sourceMappingURL=filterNulls.js.map