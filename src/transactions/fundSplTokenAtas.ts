import { Connection, Keypair, PublicKey } from "@solana/web3.js";
import createAtaIfNotExists from "transactions/createAtaIfNotExists";
import mintTo from "transactions/mintTo";
import { logIfDebug } from "utils";

export default async function fundSplTokenAtas(
  connection: Connection,
  wallets: Array<PublicKey>,
  splTokenMint: PublicKey,
  splTokenAuthority: Keypair,
  amount = 1
): Promise<Array<{ balance: string; wallet: PublicKey }>> {
  return Promise.all(
    wallets.map(async (wallet) => {
      const ata = await createAtaIfNotExists(
        connection,
        wallet,
        splTokenMint,
        splTokenAuthority
      );
      await mintTo(
        connection,
        splTokenMint,
        ata,
        splTokenAuthority.publicKey,
        [splTokenAuthority],
        amount
      );
      const tokenAccountBalance = await connection.getTokenAccountBalance(ata);
      const tokenAmount = tokenAccountBalance.value.amount;
      logIfDebug(
        `Funded ${wallet} with ${amount} SPL token(s), current SPL token balance = ${tokenAmount}`
      );
      return {
        balance: tokenAmount,
        wallet,
      };
    })
  );
}
