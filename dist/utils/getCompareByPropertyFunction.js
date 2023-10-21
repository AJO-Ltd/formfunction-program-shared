"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SortOrder_1 = __importDefault(require("../types/enums/SortOrder"));
function getCompareByPropertyFunction(key, fn, order = SortOrder_1.default.Asc) {
    return (firstEl, secondEl) => {
        if (firstEl[key] == null) {
            return 1;
        }
        if (secondEl[key] == null) {
            return -1;
        }
        const firstVal = fn(firstEl[key]);
        const secondVal = fn(secondEl[key]);
        if (firstVal < secondVal) {
            return order === SortOrder_1.default.Asc ? -1 : 1;
        }
        if (firstVal > secondVal) {
            return order === SortOrder_1.default.Asc ? 1 : -1;
        }
        return 0;
    };
}
exports.default = getCompareByPropertyFunction;
//# sourceMappingURL=getCompareByPropertyFunction.js.map