/// <reference types="@metaplex-foundation/mpl-token-metadata/node_modules/@solana/web3.js" />
import { PublicKey, Signer } from "@solana/web3.js";
export default function createTransferAtaIx(destinationTokenAccount: PublicKey, sourceTokenAccount: PublicKey, wallet: PublicKey, signers: Array<Signer>, amount: number): Promise<import("@solana/web3.js").TransactionInstruction>;
//# sourceMappingURL=createTransferAtaIx.d.ts.map