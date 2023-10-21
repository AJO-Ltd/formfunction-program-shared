import { PublicKey, Signer, TransactionInstruction } from "@solana/web3.js";
export default function createTransferIx(mint: PublicKey, destination: PublicKey, source: PublicKey, owner: PublicKey, multiSigners: Array<Signer>, amount: number): Promise<TransactionInstruction>;
//# sourceMappingURL=createTransferIx.d.ts.map