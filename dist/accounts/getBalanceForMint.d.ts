import { Connection, PublicKey } from "@solana/web3.js";
/**
 * Gets the balance for a wallet and a given mint. Mint is optional and will
 * default to the native SOL mint.
 *
 * For token accounts, you can provide token account itself or else it will be
 * derived from the wallet. You must provide only one or the other.
 */
export default function getBalanceForMint({ tokenAccount, connection, mint, wallet, }: {
    connection: Connection;
    mint: PublicKey;
    tokenAccount?: PublicKey;
    wallet?: PublicKey;
}): Promise<number>;
//# sourceMappingURL=getBalanceForMint.d.ts.map