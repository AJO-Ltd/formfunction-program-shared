"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const arePublicKeysEqual_1 = __importDefault(require("../utils/arePublicKeysEqual"));
function expectPublicKeysEqual(pubkey1, pubkey2) {
    expect((0, arePublicKeysEqual_1.default)(pubkey1, pubkey2)).toBe(true);
}
exports.default = expectPublicKeysEqual;
//# sourceMappingURL=expectPublicKeysEqual.js.map