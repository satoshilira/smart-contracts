// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/utils/Context.sol';
import '@openzeppelin/contracts/utils/math/SafeMath.sol';
import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import '@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol';

/**
 * @title Satoshi LIRA Sacrifice
 * @author Satoshi LIRA Team
 * @notice 
*/
contract LIRASacrifice is Context {
    using SafeMath for uint256;
    using SafeERC20 for IERC20;

    /**
     * The shaman of the ritual
     * @dev based on @openzeppelin/contracts@4.8.3 ./contracts/access/Ownable.sol
     */
    address private _shaman;

    event ShamanshipTransferred(address indexed previousShaman, address indexed newShaman);

    /**
     * @dev Initializes the contract setting the deployer as the initial shaman.
     */
    constructor() {
        _transferShamanship(_msgSender());
    }

    /**
     * @dev Throws if called by any account other than the shaman.
     */
    modifier onlyShaman() {
        _checkShaman();
        _;
    }

    /**
     * @dev Returns the address of the current shaman.
     */
    function shaman() public view virtual returns (address) {
        return _shaman;
    }

    /**
     * @dev Throws if the sender is not the shaman.
     */
    function _checkShaman() internal view virtual {
        require(shaman() == _msgSender(), "Ownable: caller is not the shaman");
    }

    /**
     * @dev Leaves the contract without shaman. It will not be possible to call
     * `onlyShaman` functions anymore. Can only be called by the current shaman.
     *
     * NOTE: Renouncing shamanship will leave the contract without an shaman,
     * thereby removing any functionality that is only available to the shaman.
     */
    function renounceShamanship() public virtual onlyShaman {
        _transferShamanship(address(0));
    }

    /**
     * @dev Transfers shamanship of the contract to a new account (`newShaman`).
     * Can only be called by the current shaman.
     */
    function transferShamanship(address newShaman) public virtual onlyShaman {
        require(newShaman != address(0), "Ownable: new shaman is the zero address");
        _transferShamanship(newShaman);
    }

    /**
     * @dev Transfers shamanship of the contract to a new account (`newShaman`).
     * Internal function without access restriction.
     */
    function _transferShamanship(address newShaman) internal virtual {
        address oldShaman = _shaman;
        _shaman = newShaman;
        emit ShamanshipTransferred(oldShaman, newShaman);
    }

    struct Sacrifice {
        address owner;
        uint amount;
        bool redeemed;
    }

    struct SacrificeRound {
        uint bonus;
        uint sacrified;
        uint start;
        uint end;
    }

    Sacrifice[] private _sacrifices;
    SacrificeRound[] private _rounds;

    // reward token of the ritual
    address public sacrifiedToken;
    address public redeemToken;

    // sacrificable amount per round
    uint public sacrificableAmount = 0;

    // reward tokens redeemed
    uint private _redeemed = 0;

    event Sacrified(uint owner_, uint amount_);
    event Redeemed(uint sacrifice_, uint amount_);

    modifier isNotStarted {
        // no rounds no ritual
        require(_rounds.length == 0, 'LIRA_SACRIFICE_NOT_STARTED');
        _;
    }

    modifier canSacrifice {
        // no rounds no ritual
        require(_rounds.length > 0, 'LIRA_SACRIFICE_NOT_STARTED');
        // sacrifies can be made if block.timestamp is lt last round end timestamp
        require(block.timestamp <= _rounds[_rounds.length - 1].end, 'LIRA_SACRIFICE_SACRIFICE_ENDED');
        _;
    }

    modifier canRedeem {
        // the ritual is ended if block.timestamp is gt last round end timestamp
        require(block.timestamp > _rounds[_rounds.length - 1].end, 'LIRA_SACRIFICE_SACRIFICE_ENDED');
        _;
    }

    // try to get the first sacrifice not redeemed for an owner
    function getSacrifice(address owner_) internal view returns (bool validSacrifice, uint sacrificeIndex) {
        for (uint i = 0; i < _sacrifices.length; i++) {
            if (_sacrifices[i].owner == owner_ && _sacrifices[i].redeemed == false) {
                return (true, i);
            }
        }

        return (false, 0);
    }

    // returns true if sacrifies can be made, false otherwise
    function started() public view returns (bool started_) {
        started_ = _rounds.length > 0 && block.timestamp <= _rounds[_rounds.length - 1].end;
    }

    // returns the curret round of the ritual
    function round() public view canSacrifice returns (SacrificeRound memory round_) {
        for (uint i = 0; i < _rounds.length; i++) {
            if (block.timestamp >= _rounds[i].start && block.timestamp <= _rounds[i].end) {
                return _rounds[i];
            }
        }
    }

    // returns all sacrifices
    function sacrifices() public view returns (Sacrifice[] memory sacrifices_) {
        sacrifices_ = _sacrifices;
    }

    // return the sacrificable amount left in the current round
    function sacrificable() public view canSacrifice returns (uint) {
        return sacrificableAmount - round().sacrified;
    }

    /**
     * add a new sacrifice to the queue
     * @param amount_ amount of wbtc to sacrifice
     */
    function sacrifice(uint amount_) public canSacrifice {
        require(amount_ > 1000, 'LIRA_SACRIFICE_INSUFFICIENT_AMOUNT');

        require(round().sacrified + amount_ <= sacrificableAmount, 'LIRA_SACRIFICE_ROUND_SOLD_OUT');

        IERC20(sacrifiedToken).transferFrom(_msgSender(), address(this), amount_);

        _sacrifices.push(Sacrifice(_msgSender(), amount_.add(amount_.div(100).mul(round().bonus)).mul(10 ** 8), false));

        for (uint i = 0; i < _rounds.length; i++) {
            if (block.timestamp >= _rounds[i].start && block.timestamp <= _rounds[i].end) {
                _rounds[i].sacrified += amount_;
            }
        }

        emit Sacrified(_sacrifices.length, amount_);
    }

    /**
     * redeem the first redeemable sacrifice
     * @param to address receiver of the redeem
     */
    function redeem(address to) public canRedeem {
        (bool validSacrifice, uint sacrificeIndex) = getSacrifice(_msgSender());

        require(validSacrifice, 'LIRA_SACRIFICE_NOT_FOUND');

        uint liraSupply = _redeemed.add(IERC20(redeemToken).balanceOf(address(this)));

        uint requiredSupply = 0;

        for (uint i = 0; i <= sacrificeIndex; i++) {
            requiredSupply += _sacrifices[i].amount;
        }

        require(liraSupply >= requiredSupply, 'LIRA_SACRIFICE_INSUFFICIENS_REWARD_TOKENS');

        IERC20(redeemToken).safeTransfer(to, _sacrifices[sacrificeIndex].amount);

        _redeemed += _sacrifices[sacrificeIndex].amount;
        _sacrifices[sacrificeIndex].redeemed = true;

        emit Redeemed(sacrificeIndex, _sacrifices[sacrificeIndex].amount);
    }

    // total count of sacrificies
    function count() public view returns (uint) {
        return _sacrifices.length;
    }

    // starts the ritual
    function start(address sacrifiedToken_, address redeemToken_, uint[] memory bonuses_, uint duration_, uint limit_) public onlyShaman isNotStarted {
        sacrifiedToken = sacrifiedToken_;
        redeemToken = redeemToken_;
        sacrificableAmount = limit_;

        for (uint i = 0; i < bonuses_.length; i++) {
            uint startTime = block.timestamp + (i * duration_);
            uint endTime = block.timestamp + ((1 + i) * duration_);

            _rounds.push(SacrificeRound(bonuses_[i], 0, startTime, endTime));
        }
    }

    // the shaman can withdraw sacrificed tokens that will be payed back in redeem tokens
    function withdraw(address to_, uint amount_) public onlyShaman {
        IERC20(sacrifiedToken).safeTransfer(to_, amount_);
    }
}
