"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Mainly meant to be passed to Array.filter, because TypeScript isn't
 * smart enough to figure things out when you just do something like
 * filter((val) => val != null).
 *
 * Gotten from https://stackoverflow.com/questions/43118692/typescript-filter-out-nulls-from-an-array.
 */
function isNotNull(value) {
    return value != null;
}
exports.default = isNotNull;
//# sourceMappingURL=isNotNull.js.map