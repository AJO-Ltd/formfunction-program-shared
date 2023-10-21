import { Connection, Keypair, PublicKey, TransactionSignature } from "@solana/web3.js";
import { Maybe } from "../types/UtilityTypes";
export default function mintTo(connection: Connection, mint: PublicKey, dest: PublicKey, mintAuthority: PublicKey, multiSigners: Array<Keypair>, amount: number): Promise<Maybe<TransactionSignature>>;
//# sourceMappingURL=mintTo.d.ts.map