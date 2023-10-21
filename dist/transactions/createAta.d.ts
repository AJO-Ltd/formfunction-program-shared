import { Connection, Keypair, PublicKey, TransactionSignature } from "@solana/web3.js";
import { Maybe } from "../types/UtilityTypes";
export default function createAta(connection: Connection, mint: PublicKey, owner: PublicKey, payer: Keypair): Promise<Maybe<TransactionSignature>>;
//# sourceMappingURL=createAta.d.ts.map