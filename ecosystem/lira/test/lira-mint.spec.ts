import { BigNumber, Contract, ContractFactory } from 'ethers'
import hardhat, { ethers, getNamedAccounts } from 'hardhat'
import { deployContract } from 'ethereum-waffle'
import { expect } from 'chai'
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'

import LIRA from '../artifacts/contracts/LIRA.sol/LIRA.json'
import MockWBTC from '@satoshilira/mock-tokens/artifacts/contracts/MockWBTC.sol/MockWBTC.json'
import MockWETH from '@satoshilira/mock-tokens/artifacts/contracts/MockWETH.sol/MockWETH.json'

import { appendFileSync } from 'fs'

const fs = require('fs')
const filePath = `./${new Date().getTime()}.csv`

fs.closeSync(fs.openSync(filePath, 'w'))

describe('Satoshi LIRA', function () {
  let lira: Contract
  let wbtc: Contract
  let weth: Contract

  let deployer: string
  let minter: string

  let deployerSigner: SignerWithAddress
  let minterSigner: SignerWithAddress

  beforeEach(async () => {
    const accounts = await getNamedAccounts()

    deployer = accounts.deployer
    minter = accounts.minter

    deployerSigner = await hardhat.ethers.getSigner(deployer)
    minterSigner = await hardhat.ethers.getSigner(minter)

    wbtc = await deployContract(deployerSigner, MockWBTC)
    weth = await deployContract(deployerSigner, MockWETH)
    lira = await deployContract(deployerSigner, LIRA, [wbtc.address])
  })

  describe('LIRA mint', () => {
    it('should mint 100k satoshi at time', async () => {
      await wbtc.connect(deployerSigner).mint(lira.address, BigNumber.from(200).mul(BigNumber.from(10).pow(8)))

      let blocks = BigNumber.from(1)
      console.log("🚀 ~ file: lira-mint.spec.ts:48 ~ it ~ blocks:", blocks.toString())

      const quote = await lira.connect(deployerSigner).quoteMint(1, 5);
      console.log("🚀 ~ file: lira-mint.spec.ts:51 ~ it ~ quote:", quote.map(q=>q.toString()))

      await lira.connect(deployerSigner).mint(deployer, quote[0], quote[1]);

      while (blocks.lte(100)) {
        const quote = await lira.connect(deployerSigner).quoteMint(1000, 5);
        console.log("🚀 ~ file: lira-mint.spec.ts:57 ~ it ~ quote:", quote.map(q=>q.toString()))

        await lira.connect(deployerSigner).mint(deployer, quote[0], quote[1]);

        blocks = blocks.add(1)
        console.log("🚀 ~ file: lira-mint.spec.ts:48 ~ it ~ blocks:", blocks.toString())

        const liraSupply = await lira.totalSupply();

        const locked = await lira.lockedSupply();

        appendFileSync(filePath, `${liraSupply},${locked}\n`);
      }
    })

    it('simulate lira token calcs', () => {
      let b = BigNumber.from(0)
      let l = BigNumber.from(10000).mul(BigNumber.from(10).pow(8))
      let w = BigNumber.from(10000)

      appendFileSync(filePath, `${b.toString()},${w.toString()},${l.toString()}\n`);

      while (b.lte(10000)) {
        console.log("🚀 ~ file: lira-mint.spec.ts:50 ~ it ~ blocks:", b.toString())

        const n = BigNumber.from(10000).mul(l)
        const quote = n.div(w)
        const mint = quote.div(100).mul(95)

        l = l.add(mint)

        w = w.add(10000)

        b = b.add(1)

        console.log("🚀 ~ file: lira-mint.spec.ts:76 ~ it ~ w:", w.toString())

        appendFileSync(filePath, `${b.toString()},${w.toString()},${l.toString()}\n`);
      }
    })
  })
});
