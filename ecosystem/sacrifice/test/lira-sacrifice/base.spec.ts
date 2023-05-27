import { loadFixture } from '@nomicfoundation/hardhat-network-helpers'
import { expect } from 'chai'
import { Contract } from 'ethers'
import { liraSacrificeFixture } from '../../scripts/fixtures'

describe('LIRA Sacrifice Base', () => {
  it('the deployer must be the owner of the contract', async () => {
    const { token, deployer } = await loadFixture(liraSacrificeFixture)

    expect(await token.shaman()).eq(deployer.address)
  })

  it('the scrifices count is zero', async () => {
    const { token } = await loadFixture(liraSacrificeFixture)

    expect(await token.count()).eq(0)
  })

  it('the sacrifice cannot be made until the ritual is started', async () => {
    const { token } = await loadFixture(liraSacrificeFixture)

    await expect(token.sacrifice(1)).to.revertedWith('LIRA_SACRIFICE_NOT_STARTED');
  })
})
