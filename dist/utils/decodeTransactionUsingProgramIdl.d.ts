import { Idl } from "@project-serum/anchor";
import { ParsedTransactionWithMeta, PublicKey } from "@solana/web3.js";
import { GenericDecodedTransaction, Maybe } from "../types";
type GenericDecodedTransactionResult = Record<string, GenericDecodedTransaction<string>>;
/**
 * Decodes a transaction using an Anchor generated program IDL.
 *
 * This function expects a concrete return type to be passed in, which can be
 * derived from the specific program's IDL, like this:
 * https://github.com/formfunction-hq/formfn-auction-house/blob/2c9ac2e2a1905440385612daa30da6688165a390/src/utils/tx-parsing/DecodedAuctionHouseTransactionResult.ts#L4
 */
export default function decodeTransactionUsingProgramIdl<DecodedTransactionResult extends GenericDecodedTransactionResult>(idl: Idl, programId: PublicKey, parsedTransaction: ParsedTransactionWithMeta): Maybe<DecodedTransactionResult>;
export {};
//# sourceMappingURL=decodeTransactionUsingProgramIdl.d.ts.map