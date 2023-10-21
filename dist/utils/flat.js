"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// https://stackoverflow.com/questions/50993498/flat-is-not-a-function-whats-wrong
function flat(arr) {
    // @ts-ignore
    return [].concat(...arr);
}
exports.default = flat;
//# sourceMappingURL=flat.js.map