import { Connection, PublicKey, TransactionInstruction } from "@solana/web3.js";
import { Maybe } from "../types";
export default function createAtaIxIfNotExists(connection: Connection, owner: PublicKey, tokenMint: PublicKey, payer: PublicKey): Promise<Maybe<TransactionInstruction>>;
//# sourceMappingURL=createAtaIxIfNotExists.d.ts.map