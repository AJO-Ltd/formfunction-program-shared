"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const genericNumberToNumber_1 = __importDefault(require("../utils/genericNumberToNumber"));
function expectNumbersEqual(num1, num2) {
    expect((0, genericNumberToNumber_1.default)(num1)).toBe((0, genericNumberToNumber_1.default)(num2));
}
exports.default = expectNumbersEqual;
//# sourceMappingURL=expectNumbersEqual.js.map