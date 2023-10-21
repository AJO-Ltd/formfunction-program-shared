import SortOrder from "../types/enums/SortOrder";
type Comparable = string | number;
export default function getCompareByPropertyFunction<T extends {
    [key: string]: any;
}, K extends keyof T>(key: K, fn: (val: T[K]) => Comparable, order?: SortOrder): (firstEl: T, secondEl: T) => number;
export {};
//# sourceMappingURL=getCompareByPropertyFunction.d.ts.map