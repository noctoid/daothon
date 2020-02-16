pragma solidity ^0.5.0;

import "@openzeppelin/contracts/token/ERC777/ERC777.sol";
/**
 * FanPiao-777 v1, based on ERC-777
 * The ERC-777 standard has you covered!
 * as The ERC777 standard is backwards compatible with ERC20,
 * meaning you can interact with these tokens as if they were ERC20,
 * using the standard functions, while still getting all of the niceties,
 * including send hooks.
 * Check out https://docs.openzeppelin.com/contracts/2.x/tokens#ERC777 for detail.
 */

 /**
 Q: Where is the decimals?
 A: The ERC777 specification makes it mandatory that decimals always returns
 a fixed value of 18, so there’s no need to set it ourselves.
 */
contract FanPiao777v1 is ERC777 {
    string public issueWith = "https://www.matataki.io/token";

    constructor(
        string memory name,
        string memory symbol,
        uint256 initialSupply,
        address[] memory defaultOperators
    /**
        the defaultOperators: special accounts (usually other smart contracts)
    that will be able to transfer tokens on behalf of their holders.
    If you’re not planning on using operators in your token,
    you can simply pass an empty array.
    */
    ) ERC777(name, symbol, defaultOperators) public {
        _mint(msg.sender, msg.sender, initialSupply, "", "");
    }
}