import { Data } from "@metaplex-foundation/mpl-token-metadata";
import { Connection, Keypair, PublicKey, TransactionSignature } from "@solana/web3.js";
export default function createMetadata(connection: Connection, feePayer: Keypair, mint: PublicKey, mintAuthority: PublicKey, updateAuthority: PublicKey, metadataData: Data): Promise<TransactionSignature>;
//# sourceMappingURL=createMetadata.d.ts.map