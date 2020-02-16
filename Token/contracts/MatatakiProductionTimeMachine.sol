pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;
import './MatatakiTimeMachine.sol';

contract MatatakiProductionTimeMachine is MatatakiTimeMachine {
    constructor(
        address[] memory designatedAdmin
    ) MatatakiTimeMachine(true, designatedAdmin) public {}
}