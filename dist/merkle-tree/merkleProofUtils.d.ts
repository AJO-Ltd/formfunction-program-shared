import MerkleProof from "../types/merkle-tree/MerkleProof";
/**
 * The merkle proof is a Array<Buffer>. We serialize it by decoding all of
 * the buffers to base64 strings and joining them with commas.
 *
 * base64 encoded strings only contain [A-Z][a-z][0-9][+/] characters and no
 * commas so we can safely deserialize this back to the original proof data
 * later.
 *
 * Reference:
 * - https://stackoverflow.com/a/16702216/18777715
 * - https://en.wikipedia.org/wiki/Base64#Design
 *
 * e.g. the following proof
 * [<Buffer 33 bb af 66 37 69 10 12 1a 6e 34 b3 a3 d0 94 07 fd bc a3 7b ab bc cf 97 1c c9 bb ff f4 4a 7a 02>]
 * is serialized to this string: 'M7uvZjdpEBIabjSzo9CUB/28o3urvM+XHMm7//RKegI='
 *
 * Note that for single node trees the proof is []. Claims still require a
 * leaf node which includes the pubkey for the claim, which on-chain must be
 * present as a signer.
 */
export declare function serializeMerkleProof(merkleProof: MerkleProof): string;
export declare function deserializeMerkleProof(proofString: string): MerkleProof;
//# sourceMappingURL=merkleProofUtils.d.ts.map