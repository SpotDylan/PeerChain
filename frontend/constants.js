export const abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "getCount",
    outputs: [
      {
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_idx",
        type: "uint256",
      },
    ],
    name: "getPaper",
    outputs: [
      {
        internalType: "contract PaperContract",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "papers",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string[]",
        name: "_authors",
        type: "string[]",
      },
      {
        internalType: "string",
        name: "_institution",
        type: "string",
      },
      {
        internalType: "address[]",
        name: "_citations",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "_citedBy",
        type: "address[]",
      },
      {
        internalType: "string",
        name: "_category",
        type: "string",
      },
    ],
    name: "publish",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export const journalAddress = "0x9A676e781A523b5d0C0e43731313A708CB607508";
