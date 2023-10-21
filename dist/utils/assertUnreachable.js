"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function assertUnreachable(val, failureMessage) {
    throw new Error(failureMessage !== null && failureMessage !== void 0 ? failureMessage : `Received a value which should not exist: ${JSON.stringify(val)}`);
}
exports.default = assertUnreachable;
//# sourceMappingURL=assertUnreachable.js.map