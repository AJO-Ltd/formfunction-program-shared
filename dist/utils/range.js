"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.range = void 0;
function range(stopOrStart, stop) {
    if (stop == null) {
        // stopOrStart is stop
        return [...Array(stopOrStart).keys()];
    }
    // stopOrStart is start
    if (stop <= stopOrStart) {
        return [];
    }
    return [...Array(stop - stopOrStart).keys()].map((num) => num + stopOrStart);
}
exports.range = range;
//# sourceMappingURL=range.js.map