// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// contracts from OpenZeppelin Contracts (last updated v4.8.0)
import '@openzeppelin/contracts/token/ERC20/ERC20.sol';
import '@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol';
import '@openzeppelin/contracts/access/Ownable.sol';

/**
 * @title Mock Wrapped Bitcoin
 * @author Satoshi LIRA Team
 * @custom:security-contact contact@satoshilira.io
 */
contract MockWBTC is ERC20('Wrapped BTC', 'WBTC'), Ownable {
    using SafeERC20 for ERC20;
    
    function decimals() public pure override returns (uint8) {
        return 8;
    }

    function mint(address to, uint256 quantity) public {
        _mint(to, quantity);
    }

    function burn(uint256 quantity) public {
        _burn(_msgSender(), quantity);
    }
}
