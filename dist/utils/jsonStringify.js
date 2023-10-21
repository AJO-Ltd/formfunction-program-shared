"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// From https://github.com/GoogleChromeLabs/jsbi/issues/30
function jsonStringify(object) {
    return JSON.stringify(object, (_key, value) => (typeof value === "bigint" ? value.toString() : value), 2);
}
exports.default = jsonStringify;
//# sourceMappingURL=jsonStringify.js.map