import { BigNumber, Contract, ContractFactory } from 'ethers'
import hardhat, { ethers, getNamedAccounts } from 'hardhat'
import { deployContract } from 'ethereum-waffle'
import { expect } from 'chai'
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'
import { time, mine } from '@nomicfoundation/hardhat-network-helpers';

import LIRASacrifice from '../artifacts/contracts/LIRASacrifice.sol/LIRASacrifice.json'
import MockWBTC from '@satoshilira/tokens/deployments/arbitrumGoerli/MockWBTC.json'
import LIRA from '@satoshilira/tokens/deployments/arbitrumGoerli/LIRA.json'

import { getBalanceOf } from '../scripts/utils'
import { parseEther, parseUnits } from 'ethers/lib/utils'

type SacrificeRound = [BigNumber, BigNumber, BigNumber, BigNumber];

describe('LIRA Sacrifice', function () {
  let sacrifice: Contract
  let lira: Contract
  let wbtc: Contract

  let deployer: string

  let deployerSigner: SignerWithAddress

  let startTime: BigNumber;

  const weekSeconds = BigNumber.from(604800)
  const sacrificableAmount = BigNumber.from(10).pow(8);

  before(async () => {
    const accounts = await getNamedAccounts()

    deployer = accounts.deployer

    deployerSigner = await hardhat.ethers.getSigner(deployer)

    wbtc = await deployContract(deployerSigner, MockWBTC)
    lira = await deployContract(deployerSigner, LIRA, ['Satoshi LIRA', 'LIRA', wbtc.address, 8, BigNumber.from(10).pow(8)])
    sacrifice = await deployContract(deployerSigner, LIRASacrifice)

    await wbtc.connect(deployerSigner).mint(deployer, BigNumber.from(1000).mul(100000000))
  })

  describe('Scarifice Ritual Rounds', () => {
    describe('Round 0', () => {})
    describe('Round 1', () => {})
    describe('Round 2', () => {})
    describe('Round 3', () => {})
    describe('Round 4', () => {})
    describe('Round 5', () => {})
    describe('Round 6', () => {})
    describe('Round 7', () => {})
    describe('Round 8', () => {})
    describe('Round 9', () => {})

    // TODO refactor with new functions
    it('the shaman must start the ritual', async () => {
      await sacrifice.connect(deployerSigner).start(
        wbtc.address,
        lira.address,
        [55, 34, 21, 13, 8, 5, 3, 2, 1, 1], // bonuses
        weekSeconds, // duration
        BigNumber.from(10).pow(8).toString() // limit
      )

      startTime = (await sacrifice.round()).start;

      expect((await sacrifice.round()).start).eq(startTime)
      expect((await sacrifice.round()).end).eq(startTime.add(weekSeconds))
    })

    it('the ritual must show round 0 for the first round of the ritual', async () => {
      await time.increaseTo(startTime.add(10))
      expect(await sacrifice.round()[0]).eq(55)

      expect(await sacrifice.sacrificable()).eq(BigNumber.from('100000000'))

      // sacrifice 10k satoshi in round 0
      await wbtc.connect(deployerSigner).approve(sacrifice.address, 10000)
      await sacrifice.connect(deployerSigner).sacrifice(10000)

      await time.increaseTo(startTime.add(weekSeconds).sub(1))
    })

    it('bouns must return 55 for the round 0 of the ritual', async () => {
      expect((await sacrifice.round())['bonus']).eq(55)
    })

    it('the ritual must show round 1 after 1 round from the start time', async () => {
      await time.increaseTo(startTime.add(weekSeconds))
      expect(await sacrifice.round()[0]).eq(await sacrifice.round(0)[0])

      // sacrifice 10k satoshi in round 1
      await wbtc.connect(deployerSigner).approve(sacrifice.address, 10000)
      await sacrifice.connect(deployerSigner).sacrifice(10000)

      await time.increaseTo(startTime.add(weekSeconds.mul(2)).sub(1))
      expect(await sacrifice.round()[0]).eq(await sacrifice.round(0)[0])
    })

    it('bouns must return 34 for the round 1 of the ritual', async () => {
      expect((await sacrifice.round())['bonus']).eq(34)
    })

    it('the ritual must show round 2 after 2 round from the start time', async () => {
      await time.increaseTo(startTime.add(weekSeconds.mul(2)))
      expect(await sacrifice.round()[0]).eq(await sacrifice.round()[0])

      await time.increaseTo(startTime.add(weekSeconds.mul(3)).sub(1))
      expect(await sacrifice.round()[0]).eq(await sacrifice.round()[0])
    })

    it('bouns must return 21 for the round 2 of the ritual', async () => {
      expect((await sacrifice.round())['bonus']).eq(21)
    })

    it('bouns must return 13 for the round 3 of the ritual',async () => {
      await time.increaseTo(startTime.add(weekSeconds.mul(3)))
      expect(await sacrifice.round()[0]).eq(await sacrifice.round()[0])

      await time.increaseTo(startTime.add(weekSeconds.mul(4)).sub(1))
      expect(await sacrifice.round()[0]).eq(await sacrifice.round()[0])
    })

    it('a scrifice can be made at round 3 receiving 13% bonus',async () => {
      expect((await sacrifice.round())['bonus']).eq(13)
    })

    it('bouns must return 8 for the round 4 of the ritual', async () => {
      await time.increaseTo(startTime.add(weekSeconds.mul(4)))
      expect(await sacrifice.round()[0]).eq(await sacrifice.round()[0])

      await time.increaseTo(startTime.add(weekSeconds.mul(5)).sub(1))
      expect(await sacrifice.round()[0]).eq(await sacrifice.round()[0])
    })

    it('a scrifice can be made at round 4 receiving 8% bonus', async () => {
      expect((await sacrifice.round())['bonus']).eq(8)
    })

    it('the ritual is ended when round is > 10', async () => {
      await time.increaseTo(startTime.add(weekSeconds.mul(11)))

      expect(await sacrifice.started()).eq(false);
    })

    it('the ritual is ended when round is > 10', async () => {
      await time.increaseTo(startTime.add(weekSeconds.mul(12)))

      await wbtc.connect(deployerSigner).mint(lira.address, '15500')
      await lira.connect(deployerSigner).mint(sacrifice.address, '15500')

      console.log('pre redeem', (await lira.balanceOf(sacrifice.address)).toString())

      await sacrifice.connect(deployerSigner).redeem(deployer);

      console.log('after redeem', (await lira.balanceOf(sacrifice.address)).toString())

      expect((await lira.balanceOf(deployer)).toString()).eq('1550000000000')
      await lira.connect(deployerSigner).transfer('0x0000000000000000000000000000000000000001', '1550000000000')

      await wbtc.connect(deployerSigner).mint(lira.address, '200000')
      await lira.connect(deployerSigner).mint(sacrifice.address, '200000')

      await sacrifice.connect(deployerSigner).redeem(deployer);

      expect((await lira.balanceOf(deployer)).toString()).eq('1340000000000')
    })
  })
});
