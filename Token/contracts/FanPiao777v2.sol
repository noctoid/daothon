pragma solidity ^0.5.0;

import "@openzeppelin/contracts/token/ERC777/ERC777.sol";
import "./ERC777Mintable.sol";
/**
 * FanPiao-777 v2, Mintable ERC-777 FanPiao
 * @author Frank Wei<frank@frankwei.xyz>
 * DISCLAIMER:
 This contract is currently under development and
 SHOULD NOT be USED in the REAL world before proper reviews have been made.
 Use this contract with CAUTION as there are no warranty.
 =================
 The ERC-777 standard has you covered!
 as The ERC777 standard is backwards compatible with ERC20,
 meaning you can interact with these tokens as if they were ERC20,
 using the standard functions, while still getting all of the niceties,
 including send hooks.
 Check out https://docs.openzeppelin.com/contracts/2.x/tokens#ERC777 for detail.
 */

contract FanPiao777v2 is ERC777, ERC777Mintable {
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