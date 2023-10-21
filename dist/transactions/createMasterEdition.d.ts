import { Connection, Keypair, PublicKey, TransactionSignature } from "@solana/web3.js";
export default function createMasterEdition(connection: Connection, feePayer: Keypair, editionPda: PublicKey, mint: PublicKey, mintAuthority: PublicKey, updateAuthority: PublicKey, metadataPda: PublicKey, maxSupply?: number): Promise<TransactionSignature>;
//# sourceMappingURL=createMasterEdition.d.ts.map