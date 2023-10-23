import { Keypair } from "@solana/web3.js";

// Private key for the local/dev/test bot signer keypair. A different keypair
// is used on mainnet.
export const ANTI_BOT_DEV_AUTHORITY_KEYPAIR = Keypair.fromSecretKey(
  // REPLACEME
  Uint8Array.from([206,137,58,190,15,168,150,209,44,16,230,192,95,189,137,106,234,91,102,44,134,118,28,148,142,148,135,144,242,152,122,87,134,152,98,80,93,88,87,84,80,239,177,205,150,5,24,74,193,252,119,52,32,76,203,53,49,38,201,75,236,15,95,20])
);
