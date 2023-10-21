/**
 * [].forEach does not await async callback functions. This function iterates
 * over an array and executes an asynchronous callback for each item, awaiting
 * the return value of each callback.
 */
export default function forEachAsync<T>(arr: Array<T>, fn: (val: T, index: number) => Promise<void>): Promise<void>;
//# sourceMappingURL=forEachAsync.d.ts.map