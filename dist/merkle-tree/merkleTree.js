"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const js_sha3_1 = require("js-sha3");
const getEmptyTreeRoot_1 = __importDefault(require("../merkle-tree/getEmptyTreeRoot"));
/**
 * This code is from the gumdrop-cli repo and used to construct
 * a merkle tree client side when creating a gumdrop program.
 *
 * Source: https://github.com/metaplex-foundation/gumdrop/blob/main/packages/cli/src/helpers/gumdrop/merkleTree.ts.
 */
class MerkleTree {
    constructor(leafs) {
        this.leafs = leafs.slice();
        this.layers = [];
        let hashes = this.leafs.map(MerkleTree.nodeHash);
        while (hashes.length > 0) {
            this.layers.push(hashes.slice());
            if (hashes.length === 1)
                break;
            hashes = hashes.reduce((acc, cur, idx, arr) => {
                if (idx % 2 === 0) {
                    const nxt = arr[idx + 1];
                    acc.push(MerkleTree.internalHash(cur, nxt));
                }
                return acc;
            }, Array());
        }
    }
    static nodeHash(data) {
        return Buffer.from(js_sha3_1.keccak_256.digest([0x00, ...data]));
    }
    static internalHash(first, second) {
        if (!second)
            return first;
        const [fst, snd] = [first, second].sort(Buffer.compare);
        return Buffer.from(js_sha3_1.keccak_256.digest([0x01, ...fst, ...snd]));
    }
    getRoot() {
        if (this.layers.length === 0) {
            return (0, getEmptyTreeRoot_1.default)();
        }
        return this.layers[this.layers.length - 1][0];
    }
    getProof(idx) {
        return this.layers.reduce((proof, layer) => {
            const sibling = idx ^ 1;
            if (sibling < layer.length) {
                proof.push(layer[sibling]);
            }
            idx = Math.floor(idx / 2);
            return proof;
        }, []);
    }
    getHexRoot() {
        return this.getRoot().toString("hex");
    }
    getHexProof(idx) {
        return this.getProof(idx).map((el) => el.toString("hex"));
    }
    verifyProof(idx, proof, root) {
        let pair = MerkleTree.nodeHash(this.leafs[idx]);
        for (const item of proof) {
            pair = MerkleTree.internalHash(pair, item);
        }
        return pair.equals(root);
    }
    static verifyProof(leaf, proof, root) {
        let pair = MerkleTree.nodeHash(leaf);
        for (const item of proof) {
            pair = MerkleTree.internalHash(pair, item);
        }
        return pair.equals(root);
    }
}
exports.default = MerkleTree;
//# sourceMappingURL=merkleTree.js.map