pragma solidity ^0.5.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Burnable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Mintable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol";

contract CommonFanPiao is ERC20, ERC20Detailed, ERC20Burnable, ERC20Mintable {
    string public builtOn = "https://www.matataki.io/token";

    constructor(
        string memory name,
        string memory symbol,
        uint8 decimals,
        uint256 initialSupply,
        address target
    ) ERC20Detailed(name, symbol, decimals) public {
        // We deploy this token for target
        _mint(target, initialSupply); // Initial token offer
        _addMinter(target); // The `target` can mint token for sure
    }
}