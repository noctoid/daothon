pragma solidity ^0.5.0;

import './ECny.sol';
import '@openzeppelin/contracts/crowdsale/Crowdsale.sol';
// import "@openzeppelin/contracts/crowdsale/emission/MintedCrowdsale.sol";
// import "@openzeppelin/contracts/crowdsale/validation/CappedCrowdsale.sol";

contract ECnyCrowdsale is Crowdsale {
  constructor(
      uint256 rate,    // rate in TKNbits
      address payable wallet,
      ECny token
  )
      Crowdsale(rate, wallet, token)
      public
  {

  }

}