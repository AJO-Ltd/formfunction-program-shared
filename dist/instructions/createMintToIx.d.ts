import { Keypair, PublicKey, TransactionInstruction } from "@solana/web3.js";
export default function createMintToIx(mint: PublicKey, dest: PublicKey, mintAuthority: PublicKey, multiSigners: Array<Keypair>, amount: number): TransactionInstruction;
//# sourceMappingURL=createMintToIx.d.ts.map