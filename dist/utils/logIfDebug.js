"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isProd_1 = __importDefault(require("./isProd"));
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function logIfDebug(...args) {
    if (!(0, isProd_1.default)() && process.env.DEBUG === "true") {
        // eslint-disable-next-line no-console
        console.log(...args);
    }
}
exports.default = logIfDebug;
//# sourceMappingURL=logIfDebug.js.map