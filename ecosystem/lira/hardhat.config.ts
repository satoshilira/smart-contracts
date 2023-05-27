import dotenv from 'dotenv'
dotenv.config()

import { HardhatUserConfig } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'
import '@nomiclabs/hardhat-ethers'
import 'hardhat-deploy'

const {
  ARBITRUM_DEPLOYER_PRIVATE_KEY = '',
  INFURA_ARBITRUM = '',
  INFURA_ARBITRUM_GOERLI = '',
  ETHERSCAN_ARBITRUM = '',
} = process.env

const config: HardhatUserConfig = {
  solidity: '0.8.16',
  namedAccounts: {
    deployer: 0,
    minter: 1,
  },
  typechain: {
    outDir: 'types',
    target: 'ethers-v5',
  },
  mocha: {
    timeout: 100000000
  },
  networks: {
    arbitrumGoerli: {
      url: INFURA_ARBITRUM_GOERLI,
      accounts: [ARBITRUM_DEPLOYER_PRIVATE_KEY],
      tags: ['testnet', 'mainnet'],
    },
    arbitrum: {
      url: INFURA_ARBITRUM,
      accounts: [ARBITRUM_DEPLOYER_PRIVATE_KEY],
      tags: ['mainnet'],
    },
  },
  etherscan: {
    apiKey: {
      arbitrumOne: ETHERSCAN_ARBITRUM,
      arbitrumGoerli: ETHERSCAN_ARBITRUM,
    },
  },
};

export default config
