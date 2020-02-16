pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;

import "./Migrations.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";

/*
 * This contract provides information about
 * the history of article revisions for the articles that was published on Matataki
 */

contract MatatakiTimeMachine is Migrations {
    using SafeMath for uint256;

    mapping(uint256 => mapping(uint256 => string)) articleHistory;
    mapping(uint256 => uint256) articleIdRevisionCounter;
    mapping(uint256 => address) articleOwner;
    mapping(address => bool) isContractAdmin;

    bool isProduction = false;

    constructor(bool _isProd, address[] memory designatedAdmin) public {
        isProduction = _isProd;
        isContractAdmin[msg.sender] = true;
        for (uint256 index = 0; index < designatedAdmin.length; index += 1) {
            address addr = designatedAdmin[index];
            isContractAdmin[addr] = true;
        }
    }

    function updateIpfsHash(uint256 articleId, string calldata ipfsHash) external onlyPermitted(articleId) {
        uint256 currentArticleRevision = articleIdRevisionCounter[articleId];
        articleIdRevisionCounter[articleId] = currentArticleRevision.add(1);
        articleHistory[articleId][articleIdRevisionCounter[articleId]] = ipfsHash;
    }

    function getLatestIpfsHash(uint256 articleId) external view returns(string memory) {
        uint256 currentRevision = getCurrentRevisionId(articleId);
        return articleHistory[articleId][currentRevision];
    }

    function getArticleRivisionHistory(uint256 articleId, uint256 size) external view returns(string[] memory) {
        string[] memory result = new string[](size);
        uint256 currentRevision = getCurrentRevisionId(articleId);
        for (uint256 i = 0; i < size; i += 1) {
            result[i] = articleHistory[articleId][currentRevision];
            // 循环到 0 为止
            if (currentRevision == 0) break;
            else currentRevision = currentRevision.sub(1);
        }
        return result;
    }

    function getCurrentRevisionId(uint256 articleId) public view returns(uint256) {
        return articleIdRevisionCounter[articleId];
    }

    modifier onlyPermitted(uint256 articleId) {
        require(
            msg.sender == articleOwner[articleId] ||
            isContractAdmin[msg.sender],
             "You must be the owner or admin to continute this operation.");
        _;
    }

    function setAdmin(address _address) public restricted {
        isContractAdmin[_address] = true;
    }

    function revokeAdmin(address _address) public restricted {
        isContractAdmin[_address] = false;
    }

    function getArticleOwner(uint256 articleId) public view returns(address) {
        return articleOwner[articleId];
    }

    function updateArticleOwner(uint256 articleId, address _newOwner) public onlyPermitted(articleId) {
        articleOwner[articleId] = _newOwner;
    }
}