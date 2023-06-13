/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  LIRASacrifice,
  LIRASacrificeInterface,
} from "../../contracts/LIRASacrifice";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "sacrifice_",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
    ],
    name: "Redeemed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "owner_",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
    ],
    name: "Sacrified",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousShaman",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newShaman",
        type: "address",
      },
    ],
    name: "ShamanshipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "_rounds",
    outputs: [
      {
        internalType: "uint256",
        name: "bonus",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "sacrified",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "start",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "end",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "count",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "redeem",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "redeemToken",
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
    inputs: [],
    name: "renounceShamanship",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "round",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "bonus",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "sacrified",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "start",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "end",
            type: "uint256",
          },
        ],
        internalType: "struct LIRASacrifice.SacrificeRound",
        name: "round_",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "sacrificable",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "sacrificableAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
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
        name: "amount_",
        type: "uint256",
      },
    ],
    name: "sacrifice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "sacrifices",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "redeemed",
            type: "bool",
          },
        ],
        internalType: "struct LIRASacrifice.Sacrifice[]",
        name: "sacrifices_",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "sacrifiedToken",
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
    inputs: [],
    name: "shaman",
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
        internalType: "address",
        name: "sacrifiedToken_",
        type: "address",
      },
      {
        internalType: "address",
        name: "redeemToken_",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "bonuses_",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "duration_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "limit_",
        type: "uint256",
      },
    ],
    name: "start",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "started",
    outputs: [
      {
        internalType: "bool",
        name: "started_",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newShaman",
        type: "address",
      },
    ],
    name: "transferShamanship",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052600060055560006006553480156200001b57600080fd5b506200003c620000306200004260201b60201c565b6200004a60201b60201c565b6200010e565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167fbf21a310b3ce67e53ac769338e97a12e7088be65dc6a64b625bcd6c602232fbe60405160405180910390a35050565b612707806200011e6000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c8063674532101161009757806395a2251f1161006657806395a2251f1461026a578063e178e05114610286578063f3fef3a3146102a2578063f83b2601146102be57610100565b806367453210146101df57806372cff830146101fb57806383cbc5d41461021957806388307abf1461024c57610100565b8063350e5f83116100d3578063350e5f831461017d5780633c8a94ef1461019b5780634db00444146101b95780635e0d7c0b146101d557610100565b806306661abd14610105578063146ca531146101235780631f2698ab146101415780632f310bad1461015f575b600080fd5b61010d6102dc565b60405161011a919061179a565b60405180910390f35b61012b6102e9565b6040516101389190611819565b60405180910390f35b610149610496565b604051610156919061184f565b60405180910390f35b6101676104e7565b60405161017491906118ab565b60405180910390f35b61018561050d565b60405161019291906119d5565b60405180910390f35b6101a36105e7565b6040516101b0919061179a565b60405180910390f35b6101d360048036038101906101ce9190611a37565b6105ed565b005b6101dd610671565b005b6101f960048036038101906101f49190611be9565b610685565b005b61020361085a565b604051610210919061179a565b60405180910390f35b610233600480360381019061022e9190611c80565b61093a565b6040516102439493929190611cad565b60405180910390f35b61025461097a565b60405161026191906118ab565b60405180910390f35b610284600480360381019061027f9190611a37565b6109a0565b005b6102a0600480360381019061029b9190611c80565b610d0a565b005b6102bc60048036038101906102b79190611cf2565b611134565b005b6102c661118d565b6040516102d391906118ab565b60405180910390f35b6000600180549050905090565b6102f1611759565b600060028054905011610339576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161033090611d8f565b60405180910390fd5b6002600160028054905061034d9190611dde565b8154811061035e5761035d611e12565b5b9060005260206000209060040201600301544211156103b2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103a990611e8d565b60405180910390fd5b60005b60028054905081101561049157600281815481106103d6576103d5611e12565b5b906000526020600020906004020160020154421015801561041c57506002818154811061040657610405611e12565b5b9060005260206000209060040201600301544211155b1561047e576002818154811061043557610434611e12565b5b9060005260206000209060040201604051806080016040529081600082015481526020016001820154815260200160028201548152602001600382015481525050915050610493565b808061048990611ead565b9150506103b5565b505b90565b6000806002805490501180156104e25750600260016002805490506104bb9190611dde565b815481106104cc576104cb611e12565b5b9060005260206000209060040201600301544211155b905090565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60606001805480602002602001604051908101604052809291908181526020016000905b828210156105de57838290600052602060002090600302016040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600182015481526020016002820160009054906101000a900460ff16151515158152505081526020019060010190610531565b50505050905090565b60055481565b6105f56111b6565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610665576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161065c90611f68565b60405180910390fd5b61066e81611234565b50565b6106796111b6565b6106836000611234565b565b61068d6111b6565b6000600280549050146106d5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106cc90611d8f565b60405180910390fd5b84600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060058190555060005b835181101561085257600083826107789190611f88565b426107839190611fe2565b90506000848360016107959190611fe2565b61079f9190611f88565b426107aa9190611fe2565b9050600260405180608001604052808886815181106107cc576107cb611e12565b5b60200260200101518152602001600081526020018481526020018381525090806001815401808255809150506001900390600052602060002090600402016000909190919091506000820151816000015560208201518160010155604082015181600201556060820151816003015550505050808061084a90611ead565b915050610761565b505050505050565b600080600280549050116108a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161089a90611d8f565b60405180910390fd5b600260016002805490506108b79190611dde565b815481106108c8576108c7611e12565b5b90600052602060002090600402016003015442111561091c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161091390611e8d565b60405180910390fd5b6109246102e9565b602001516005546109359190611dde565b905090565b6002818154811061094a57600080fd5b90600052602060002090600402016000915090508060000154908060010154908060020154908060030154905084565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600260016002805490506109b49190611dde565b815481106109c5576109c4611e12565b5b9060005260206000209060040201600301544211610a18576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a0f90611e8d565b60405180910390fd5b600080610a2b610a266112f8565b611300565b9150915081610a6f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a6690612084565b60405180910390fd5b6000610b21600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401610acf91906118ab565b602060405180830381865afa158015610aec573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b1091906120b9565b6006546113fc90919063ffffffff16565b90506000805b838111610b745760018181548110610b4257610b41611e12565b5b90600052602060002090600302016001015482610b5f9190611fe2565b91508080610b6c90611ead565b915050610b27565b5080821015610bb8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610baf90612158565b60405180910390fd5b610c2a8560018581548110610bd057610bcf611e12565b5b906000526020600020906003020160010154600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166114129092919063ffffffff16565b60018381548110610c3e57610c3d611e12565b5b90600052602060002090600302016001015460066000828254610c619190611fe2565b925050819055506001808481548110610c7d57610c7c611e12565b5b906000526020600020906003020160020160006101000a81548160ff0219169083151502179055507f6f73b7b8d37df32ea60a45eadc8fc3d2d716d705ee099bd506817482ce8473168360018581548110610cdb57610cda611e12565b5b906000526020600020906003020160010154604051610cfb929190612178565b60405180910390a15050505050565b600060028054905011610d52576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d4990611d8f565b60405180910390fd5b60026001600280549050610d669190611dde565b81548110610d7757610d76611e12565b5b906000526020600020906004020160030154421115610dcb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dc290611e8d565b60405180910390fd5b6103e88111610e0f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e0690612213565b60405180910390fd5b60055481610e1b6102e9565b60200151610e299190611fe2565b1115610e6a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e619061227f565b60405180910390fd5b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd610eb06112f8565b30846040518463ffffffff1660e01b8152600401610ed09392919061229f565b6020604051808303816000875af1158015610eef573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f139190612302565b5060016040518060600160405280610f296112f8565b73ffffffffffffffffffffffffffffffffffffffff168152602001610f8b6305f5e100610f7d610f576102e9565b60000151610f6f600a8961149890919063ffffffff16565b6114ae90919063ffffffff16565b61149890919063ffffffff16565b815260200160001515815250908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001015560408201518160020160006101000a81548160ff021916908315150217905550505060005b6002805490508110156110f2576002818154811061105757611056611e12565b5b906000526020600020906004020160020154421015801561109d57506002818154811061108757611086611e12565b5b9060005260206000209060040201600301544211155b156110df5781600282815481106110b7576110b6611e12565b5b906000526020600020906004020160010160008282546110d79190611fe2565b925050819055505b80806110ea90611ead565b915050611036565b507f3ae97f8cd7838c1f19bfc8e70bb68867dcb856d68e50f040f316e4dc4240493a60018054905082604051611129929190612178565b60405180910390a150565b61113c6111b6565b6111898282600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166114129092919063ffffffff16565b5050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6111be6112f8565b73ffffffffffffffffffffffffffffffffffffffff166111dc61118d565b73ffffffffffffffffffffffffffffffffffffffff1614611232576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611229906123a1565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167fbf21a310b3ce67e53ac769338e97a12e7088be65dc6a64b625bcd6c602232fbe60405160405180910390a35050565b600033905090565b60008060005b6001805490508110156113ee578373ffffffffffffffffffffffffffffffffffffffff166001828154811061133e5761133d611e12565b5b906000526020600020906003020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161480156113c9575060001515600182815481106113a6576113a5611e12565b5b906000526020600020906003020160020160009054906101000a900460ff161515145b156113db5760018192509250506113f7565b80806113e690611ead565b915050611306565b50600080915091505b915091565b6000818361140a9190611fe2565b905092915050565b6114938363a9059cbb60e01b84846040516024016114319291906123c1565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506114c4565b505050565b600081836114a69190611f88565b905092915050565b600081836114bc9190612419565b905092915050565b6000611526826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff1661158b9092919063ffffffff16565b905060008151111561158657808060200190518101906115469190612302565b611585576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161157c906124bc565b60405180910390fd5b5b505050565b606061159a84846000856115a3565b90509392505050565b6060824710156115e8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115df9061254e565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161161191906125e8565b60006040518083038185875af1925050503d806000811461164e576040519150601f19603f3d011682016040523d82523d6000602084013e611653565b606091505b509150915061166487838387611670565b92505050949350505050565b606083156116d3576000835114156116cb5761168b856116e6565b6116ca576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116c19061264b565b60405180910390fd5b5b8290506116de565b6116dd8383611709565b5b949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60008251111561171c5781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161175091906126af565b60405180910390fd5b6040518060800160405280600081526020016000815260200160008152602001600081525090565b6000819050919050565b61179481611781565b82525050565b60006020820190506117af600083018461178b565b92915050565b6117be81611781565b82525050565b6080820160008201516117da60008501826117b5565b5060208201516117ed60208501826117b5565b50604082015161180060408501826117b5565b50606082015161181360608501826117b5565b50505050565b600060808201905061182e60008301846117c4565b92915050565b60008115159050919050565b61184981611834565b82525050565b60006020820190506118646000830184611840565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006118958261186a565b9050919050565b6118a58161188a565b82525050565b60006020820190506118c0600083018461189c565b92915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6118fb8161188a565b82525050565b61190a81611834565b82525050565b60608201600082015161192660008501826118f2565b50602082015161193960208501826117b5565b50604082015161194c6040850182611901565b50505050565b600061195e8383611910565b60608301905092915050565b6000602082019050919050565b6000611982826118c6565b61198c81856118d1565b9350611997836118e2565b8060005b838110156119c85781516119af8882611952565b97506119ba8361196a565b92505060018101905061199b565b5085935050505092915050565b600060208201905081810360008301526119ef8184611977565b905092915050565b6000604051905090565b600080fd5b600080fd5b611a148161188a565b8114611a1f57600080fd5b50565b600081359050611a3181611a0b565b92915050565b600060208284031215611a4d57611a4c611a01565b5b6000611a5b84828501611a22565b91505092915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611ab282611a69565b810181811067ffffffffffffffff82111715611ad157611ad0611a7a565b5b80604052505050565b6000611ae46119f7565b9050611af08282611aa9565b919050565b600067ffffffffffffffff821115611b1057611b0f611a7a565b5b602082029050602081019050919050565b600080fd5b611b2f81611781565b8114611b3a57600080fd5b50565b600081359050611b4c81611b26565b92915050565b6000611b65611b6084611af5565b611ada565b90508083825260208201905060208402830185811115611b8857611b87611b21565b5b835b81811015611bb15780611b9d8882611b3d565b845260208401935050602081019050611b8a565b5050509392505050565b600082601f830112611bd057611bcf611a64565b5b8135611be0848260208601611b52565b91505092915050565b600080600080600060a08688031215611c0557611c04611a01565b5b6000611c1388828901611a22565b9550506020611c2488828901611a22565b945050604086013567ffffffffffffffff811115611c4557611c44611a06565b5b611c5188828901611bbb565b9350506060611c6288828901611b3d565b9250506080611c7388828901611b3d565b9150509295509295909350565b600060208284031215611c9657611c95611a01565b5b6000611ca484828501611b3d565b91505092915050565b6000608082019050611cc2600083018761178b565b611ccf602083018661178b565b611cdc604083018561178b565b611ce9606083018461178b565b95945050505050565b60008060408385031215611d0957611d08611a01565b5b6000611d1785828601611a22565b9250506020611d2885828601611b3d565b9150509250929050565b600082825260208201905092915050565b7f4c4952415f5341435249464943455f4e4f545f53544152544544000000000000600082015250565b6000611d79601a83611d32565b9150611d8482611d43565b602082019050919050565b60006020820190508181036000830152611da881611d6c565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611de982611781565b9150611df483611781565b925082821015611e0757611e06611daf565b5b828203905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4c4952415f5341435249464943455f5341435249464943455f454e4445440000600082015250565b6000611e77601e83611d32565b9150611e8282611e41565b602082019050919050565b60006020820190508181036000830152611ea681611e6a565b9050919050565b6000611eb882611781565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611eeb57611eea611daf565b5b600182019050919050565b7f4f776e61626c653a206e6577207368616d616e20697320746865207a65726f2060008201527f6164647265737300000000000000000000000000000000000000000000000000602082015250565b6000611f52602783611d32565b9150611f5d82611ef6565b604082019050919050565b60006020820190508181036000830152611f8181611f45565b9050919050565b6000611f9382611781565b9150611f9e83611781565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611fd757611fd6611daf565b5b828202905092915050565b6000611fed82611781565b9150611ff883611781565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561202d5761202c611daf565b5b828201905092915050565b7f4c4952415f5341435249464943455f4e4f545f464f554e440000000000000000600082015250565b600061206e601883611d32565b915061207982612038565b602082019050919050565b6000602082019050818103600083015261209d81612061565b9050919050565b6000815190506120b381611b26565b92915050565b6000602082840312156120cf576120ce611a01565b5b60006120dd848285016120a4565b91505092915050565b7f4c4952415f5341435249464943455f494e53554646494349454e535f5245574160008201527f52445f544f4b454e530000000000000000000000000000000000000000000000602082015250565b6000612142602983611d32565b915061214d826120e6565b604082019050919050565b6000602082019050818103600083015261217181612135565b9050919050565b600060408201905061218d600083018561178b565b61219a602083018461178b565b9392505050565b7f4c4952415f5341435249464943455f494e53554646494349454e545f414d4f5560008201527f4e54000000000000000000000000000000000000000000000000000000000000602082015250565b60006121fd602283611d32565b9150612208826121a1565b604082019050919050565b6000602082019050818103600083015261222c816121f0565b9050919050565b7f4c4952415f5341435249464943455f524f554e445f534f4c445f4f5554000000600082015250565b6000612269601d83611d32565b915061227482612233565b602082019050919050565b600060208201905081810360008301526122988161225c565b9050919050565b60006060820190506122b4600083018661189c565b6122c1602083018561189c565b6122ce604083018461178b565b949350505050565b6122df81611834565b81146122ea57600080fd5b50565b6000815190506122fc816122d6565b92915050565b60006020828403121561231857612317611a01565b5b6000612326848285016122ed565b91505092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865207368616d6160008201527f6e00000000000000000000000000000000000000000000000000000000000000602082015250565b600061238b602183611d32565b91506123968261232f565b604082019050919050565b600060208201905081810360008301526123ba8161237e565b9050919050565b60006040820190506123d6600083018561189c565b6123e3602083018461178b565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061242482611781565b915061242f83611781565b92508261243f5761243e6123ea565b5b828204905092915050565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b60006124a6602a83611d32565b91506124b18261244a565b604082019050919050565b600060208201905081810360008301526124d581612499565b9050919050565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b6000612538602683611d32565b9150612543826124dc565b604082019050919050565b600060208201905081810360008301526125678161252b565b9050919050565b600081519050919050565b600081905092915050565b60005b838110156125a2578082015181840152602081019050612587565b838111156125b1576000848401525b50505050565b60006125c28261256e565b6125cc8185612579565b93506125dc818560208601612584565b80840191505092915050565b60006125f482846125b7565b915081905092915050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b6000612635601d83611d32565b9150612640826125ff565b602082019050919050565b6000602082019050818103600083015261266481612628565b9050919050565b600081519050919050565b60006126818261266b565b61268b8185611d32565b935061269b818560208601612584565b6126a481611a69565b840191505092915050565b600060208201905081810360008301526126c98184612676565b90509291505056fea2646970667358221220b9e925d0dc2eb3ec37342849e5864b5e346841615fe375705dd8022d7b3f647164736f6c634300080a0033";

type LIRASacrificeConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LIRASacrificeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LIRASacrifice__factory extends ContractFactory {
  constructor(...args: LIRASacrificeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<LIRASacrifice> {
    return super.deploy(overrides || {}) as Promise<LIRASacrifice>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): LIRASacrifice {
    return super.attach(address) as LIRASacrifice;
  }
  override connect(signer: Signer): LIRASacrifice__factory {
    return super.connect(signer) as LIRASacrifice__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LIRASacrificeInterface {
    return new utils.Interface(_abi) as LIRASacrificeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LIRASacrifice {
    return new Contract(address, _abi, signerOrProvider) as LIRASacrifice;
  }
}
