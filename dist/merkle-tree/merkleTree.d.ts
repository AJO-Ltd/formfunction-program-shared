/// <reference types="node" />
/**
 * This code is from the gumdrop-cli repo and used to construct
 * a merkle tree client side when creating a gumdrop program.
 *
 * Source: https://github.com/metaplex-foundation/gumdrop/blob/main/packages/cli/src/helpers/gumdrop/merkleTree.ts.
 */
export default class MerkleTree {
    leafs: Array<Buffer>;
    layers: Array<Array<Buffer>>;
    constructor(leafs: Array<Buffer>);
    static nodeHash(data: Buffer): Buffer;
    static internalHash(first: Buffer, second: Buffer | undefined): Buffer;
    getRoot(): Buffer;
    getProof(idx: number): Array<Buffer>;
    getHexRoot(): string;
    getHexProof(idx: number): Array<string>;
    verifyProof(idx: number, proof: Array<Buffer>, root: Buffer): boolean;
    static verifyProof(leaf: Buffer, proof: Array<Buffer>, root: Buffer): boolean;
}
//# sourceMappingURL=merkleTree.d.ts.map