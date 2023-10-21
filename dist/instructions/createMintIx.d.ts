import { PublicKey, TransactionInstruction } from "@solana/web3.js";
export default function createMintIx({ mint, wallet, decimals, mintAuthority, freezeAuthority, }: {
    decimals?: number;
    freezeAuthority?: PublicKey;
    mint: PublicKey;
    mintAuthority?: PublicKey;
    wallet: PublicKey;
}): TransactionInstruction;
//# sourceMappingURL=createMintIx.d.ts.map