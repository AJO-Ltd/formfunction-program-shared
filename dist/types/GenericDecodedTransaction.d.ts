import AnchorInstructionArgs from "../types/AnchorInstructionArgs";
type GenericDecodedTransaction<IdlInstructionName> = {
    data: AnchorInstructionArgs;
    logs: Array<string>;
    name: IdlInstructionName;
};
export default GenericDecodedTransaction;
//# sourceMappingURL=GenericDecodedTransaction.d.ts.map