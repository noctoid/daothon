pragma solidity ^0.5.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Burnable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Mintable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol";

contract MigratedFanPiao is ERC20, ERC20Detailed, ERC20Burnable, ERC20Mintable {
    string public builtOn = "https://www.matataki.io/token";

    constructor(
        string memory name,
        string memory symbol,
        uint8 decimals,
        address issuer,
        address[] memory holders,
        uint256[] memory amounts
    ) ERC20Detailed(name, symbol, decimals) public {
        require(amounts.length == holders.length, "You are missing value for someone");
        // Setting Permission for FanPiao issuer
        _addMinter(issuer); // The `issuer` can mint token for sure
        // Recover from snapshot when deploy
        for (uint8 i = 0; i < holders.length; i++) {
            address _holder = holders[i];
            uint256 _amount = amounts[i];
            _mint(_holder, _amount); // Initial token offer
        }
    }
}