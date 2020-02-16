pragma solidity ^0.5.11;

contract SelfDestroyMultisend
{
    constructor(address payable[] memory destinations, uint256[] memory amounts) public payable
    {
        require(destinations.length == amounts.length, "the length of both destinations and amounts arrays are not matching");
        for (uint256 i = 0; i < destinations.length; i += 1)
        {
            destinations[i].transfer(amounts[i]);
        }
        selfdestruct(msg.sender);
    }
}