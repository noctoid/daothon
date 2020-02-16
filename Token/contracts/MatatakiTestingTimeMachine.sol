pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;
import './MatatakiTimeMachine.sol';

contract MatatakiTestingTimeMachine is MatatakiTimeMachine {
    constructor(
        address[] memory designatedAdmin
    ) MatatakiTimeMachine(false, designatedAdmin) public {}
}