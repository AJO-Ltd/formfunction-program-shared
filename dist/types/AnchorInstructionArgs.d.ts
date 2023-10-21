import BN from "bn.js";
import { MaybeUndef } from "../types/UtilityTypes";
/**
 * The Anchor type for Instruction.data is Object, which is very generic but
 * slightly better than 'any'. However, to have slightly better type guarantees,
 * and specifically to avoid blindly using possibly null or undefined values,
 * we can override it with the following more specific type.
 */
type PrimitiveInstructionArg = boolean | string | number | BN;
interface AnchorInstructionObject<T> {
    [key: string]: T;
}
type AnchorInstructionArg = PrimitiveInstructionArg | Array<AnchorInstructionArg> | AnchorInstructionObject<AnchorInstructionArg>;
type AnchorInstructionArgs = Record<string, MaybeUndef<AnchorInstructionArg>>;
export default AnchorInstructionArgs;
//# sourceMappingURL=AnchorInstructionArgs.d.ts.map