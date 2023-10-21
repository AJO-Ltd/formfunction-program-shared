"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProgramIds_1 = require("../constants/ProgramIds");
const arePublicKeysEqual_1 = __importDefault(require("../utils/arePublicKeysEqual"));
function isMintNative(mint) {
    return (0, arePublicKeysEqual_1.default)(mint, ProgramIds_1.WRAPPED_SOL_MINT);
}
exports.default = isMintNative;
//# sourceMappingURL=isMintNative.js.map