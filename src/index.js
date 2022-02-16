const { MerkleTree } = require("merkletreejs")
const keccak256 = require("keccak256")

let whitelistAddresses = ["0x18236675fE58640dc2e9dDFfC478eC2EEea6Ca52"]

// Leaves, merkleTree, and rootHash are all determined prior to claim.
// The project would have some form of whitelist process
// where whitelisted addresses are collected and known beforehand

// Creates a new array 'leafNodes' by hashing all indices of the 'whitelistAddresses'
// using keccak256. Then creates a new Merkle Tree object using keccak256 as the
// desired hashing algorithm.
const leafNodes = whitelistAddresses.map((address) => keccak256(address))
const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true })

// Gets the root hash of the merkle tree in hex format.
const rootHash = merkleTree.getHexRoot()

console.log("Whitelist Merkle Tree: \n", rootHash)
