import { Data } from "@metaplex-foundation/mpl-token-metadata";
import { PublicKey, Transaction } from "@solana/web3.js";
export default function createMetadataTx(feePayer: PublicKey, mint: PublicKey, mintAuthority: PublicKey, updateAuthority: PublicKey, metadataData: Data): Promise<Transaction>;
//# sourceMappingURL=createMetadataTx.d.ts.map