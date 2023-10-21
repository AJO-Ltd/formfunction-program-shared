import { Connection, Keypair, PublicKey, TransactionSignature } from "@solana/web3.js";
import { Maybe } from "../types";
export default function transfer(connection: Connection, owner: Keypair, fromTokenAccount: PublicKey, tokenMint: PublicKey, toTokenAccount: PublicKey, amountToTransfer?: number): Promise<Maybe<TransactionSignature>>;
//# sourceMappingURL=transfer.d.ts.map