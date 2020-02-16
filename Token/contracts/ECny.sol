pragma solidity ^0.5.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Burnable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Mintable.sol";
// import "openzeppelin-solidity/contracts/token/ERC20/SafeERC20.sol";

contract ECny is ERC20, ERC20Detailed, ERC20Burnable, ERC20Mintable {
  uint public INITIAL_SUPPLY = 1e10;
  address public owner;

  constructor(string memory _name, string memory _symbol, uint8 _decimals)
    ERC20Detailed(_name, _symbol, _decimals)
    public
  {
    _mint(msg.sender, INITIAL_SUPPLY);
    owner = msg.sender;
  }
}