// Automatically generated with Reach 0.1.11 (1c3f08fe)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (1c3f08fe)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  
  return {
    infos: {
      },
    views: {
      1: []
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Pat(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Pat expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Pat expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  
  
  const v61 = stdlib.protect(ctc0, await interact.getChallenge(), {
    at: './index.rsh:20:58:application',
    fs: ['at ./index.rsh:19:11:application call to [unknown function] (defined at: ./index.rsh:19:15:function exp)'],
    msg: 'getChallenge',
    who: 'Pat'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v61],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:22:7:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:22:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v63], secs: v65, time: v64, didSend: v28, from: v62 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v63], secs: v65, time: v64, didSend: v28, from: v62 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v70], secs: v72, time: v71, didSend: v37, from: v69 } = txn2;
  ;
  const v73 = stdlib.ge(v63, v70);
  const v74 = stdlib.eq(v63, v70);
  const v75 = v74 ? stdlib.checkedBigNumberify('./index.rsh:31:87:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:31:91:decimal', stdlib.UInt_max, '2');
  const v76 = v73 ? v75 : stdlib.checkedBigNumberify('./index.rsh:31:95:decimal', stdlib.UInt_max, '0');
  stdlib.protect(ctc1, await interact.seeResult(v76), {
    at: './index.rsh:34:23:application',
    fs: ['at ./index.rsh:33:7:application call to [unknown function] (defined at: ./index.rsh:33:25:function exp)'],
    msg: 'seeResult',
    who: 'Pat'
    });
  
  return;
  
  
  
  
  };
export async function Vanna(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Vanna expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Vanna expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v63], secs: v65, time: v64, didSend: v28, from: v62 } = txn1;
  ;
  const v68 = stdlib.protect(ctc0, await interact.getChallenge(), {
    at: './index.rsh:26:60:application',
    fs: ['at ./index.rsh:25:13:application call to [unknown function] (defined at: ./index.rsh:25:16:function exp)'],
    msg: 'getChallenge',
    who: 'Vanna'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v68],
    evt_cnt: 1,
    funcNum: 1,
    lct: v64,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:28:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v70], secs: v72, time: v71, didSend: v37, from: v69 } = txn2;
      
      ;
      const v73 = stdlib.ge(v63, v70);
      const v74 = stdlib.eq(v63, v70);
      const v75 = v74 ? stdlib.checkedBigNumberify('./index.rsh:31:87:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:31:91:decimal', stdlib.UInt_max, '2');
      const v76 = v73 ? v75 : stdlib.checkedBigNumberify('./index.rsh:31:95:decimal', stdlib.UInt_max, '0');
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v70], secs: v72, time: v71, didSend: v37, from: v69 } = txn2;
  ;
  const v73 = stdlib.ge(v63, v70);
  const v74 = stdlib.eq(v63, v70);
  const v75 = v74 ? stdlib.checkedBigNumberify('./index.rsh:31:87:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:31:91:decimal', stdlib.UInt_max, '2');
  const v76 = v73 ? v75 : stdlib.checkedBigNumberify('./index.rsh:31:95:decimal', stdlib.UInt_max, '0');
  stdlib.protect(ctc1, await interact.seeResult(v76), {
    at: './index.rsh:34:23:application',
    fs: ['at ./index.rsh:33:7:application call to [unknown function] (defined at: ./index.rsh:33:25:function exp)'],
    msg: 'seeResult',
    who: 'Vanna'
    });
  
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiACAAEmAQAiNQAxGEEA2ChkSSJbNQGBCFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIwxAACcjEkQjNAESRDQESSISTDQCEhFESTUFFzX/gATVFRkUNP8WULBCADNIgaCNBogAmCI0ARJENARJIhJMNAISEURJNQUXNf+ABILEYf40/xZQsCM1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQoNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEIzE1EkQiMTYSRCIxNxJEIjUBIjUCQv+vNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 0,
  stateSize: 0,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v63",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v63",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v70",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v70",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516106793803806106798339810160408190526100229161017c565b6000805543600355604080513381528251602080830191909152830151518183015290517f28822ae872174fb8917549901c639f920e5c2ef0fb881ea78a94dee578586e9d9181900360600190a161007c341560076100ba565b600160008181554390915560408051602080820184905282518083038201815291830190925280516100b29260029201906100e3565b505050610255565b816100df5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546100ef9061021a565b90600052602060002090601f0160209004810192826101115760008555610157565b82601f1061012a57805160ff1916838001178555610157565b82800160010185558215610157579182015b8281111561015757825182559160200191906001019061013c565b50610163929150610167565b5090565b5b808211156101635760008155600101610168565b600081830360408082121561019057600080fd5b80518082016001600160401b0380821183831017156101bf57634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156101d857600080fd5b83519450602085019150848210818311171561020457634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b600181811c9082168061022e57607f821691505b6020821081141561024f57634e487b7160e01b600052602260045260246000fd5b50919050565b610415806102646000396000f3fe6080604052600436106100405760003560e01c80631e93b0f114610049578063832307571461006d578063873779a114610082578063ab53f2c61461009557005b3661004757005b005b34801561005557600080fd5b506003545b6040519081526020015b60405180910390f35b34801561007957600080fd5b5060015461005a565b61004761009036600461030c565b6100b8565b3480156100a157600080fd5b506100aa6101f4565b604051610064929190610324565b6100c86001600054146009610291565b6100e2813515806100db57506001548235145b600a610291565b6000808055600280546100f490610381565b80601f016020809104026020016040519081016040528092919081815260200182805461012090610381565b801561016d5780601f106101425761010080835404028352916020019161016d565b820191906000526020600020905b81548152906001019060200180831161015057829003601f168201915b505050505080602001905181019061018591906103b6565b6040805133815284356020808301919091528501358183015290519192507f3957da95a08a7316b724c4fe20ec058158ff5f626860362a6b6aafcb999f7225919081900360600190a16101da34156008610291565b600080805560018190556101f0906002906102b6565b5050565b60006060600054600280805461020990610381565b80601f016020809104026020016040519081016040528092919081815260200182805461023590610381565b80156102825780601f1061025757610100808354040283529160200191610282565b820191906000526020600020905b81548152906001019060200180831161026557829003601f168201915b50505050509050915091509091565b816101f05760405163100960cb60e01b81526004810182905260240160405180910390fd5b5080546102c290610381565b6000825580601f106102d2575050565b601f0160209004906000526020600020908101906102f091906102f3565b50565b5b8082111561030857600081556001016102f4565b5090565b60006040828403121561031e57600080fd5b50919050565b82815260006020604081840152835180604085015260005b818110156103585785810183015185820160600152820161033c565b8181111561036a576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061039557607f821691505b6020821081141561031e57634e487b7160e01b600052602260045260246000fd5b6000602082840312156103c857600080fd5b815180151581146103d857600080fd5b939250505056fea2646970667358221220e8c1edc6626ac16d1a7b9f66fcf806a4c6c87307a55989a0d91046774d7cd7e264736f6c634300080c0033`,
  BytecodeLen: 1657,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:23:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:29:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Pat": Pat,
  "Vanna": Vanna
  };
export const _APIs = {
  };
