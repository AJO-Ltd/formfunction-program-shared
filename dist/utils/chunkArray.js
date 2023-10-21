"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function chunkArray(array, size) {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
        const chunk = array.slice(i, i + size);
        result.push(chunk);
    }
    return result;
}
exports.default = chunkArray;
//# sourceMappingURL=chunkArray.js.map