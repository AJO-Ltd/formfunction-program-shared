/**
 * This helper script reads a program ID, modifies it, and generates a new
 * file of types which map the program instruction names to typed account maps.
 *
 * This generated code can then be used to parse program transactions with
 * more type safety.
 */
export default function modifyProgramIdlScript({ decodedTransactionResultTypeFilePath, idlFilePath, programName, }: {
    decodedTransactionResultTypeFilePath: string;
    idlFilePath: string;
    programName: string;
}): void;
//# sourceMappingURL=modifyProgramIdlScript.d.ts.map