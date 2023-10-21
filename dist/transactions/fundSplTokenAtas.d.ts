import { Connection, Keypair, PublicKey } from "@solana/web3.js";
export default function fundSplTokenAtas(connection: Connection, wallets: Array<PublicKey>, splTokenMint: PublicKey, splTokenAuthority: Keypair, amount?: number): Promise<Array<{
    balance: string;
    wallet: PublicKey;
}>>;
//# sourceMappingURL=fundSplTokenAtas.d.ts.map