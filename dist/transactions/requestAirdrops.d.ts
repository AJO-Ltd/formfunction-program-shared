import { Connection, Keypair, PublicKey } from "@solana/web3.js";
import Environment from "../constants/Environment";
export default function requestAirdrops({ wallets, connection, environment, amountInSol, }: {
    amountInSol?: number;
    connection: Connection;
    environment?: Environment;
    wallets: Array<Keypair | PublicKey>;
}): Promise<void>;
//# sourceMappingURL=requestAirdrops.d.ts.map