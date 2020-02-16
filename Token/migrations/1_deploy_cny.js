const ECny = artifacts.require("ECny");
const ECnyCrowdsale = artifacts.require("ECnyCrowdsale");
// const web3 = require("web3");

module.exports = function(deployer, network, accounts) {
  const _name = "ECny";
  const _symbol = "ECNY";
  const _decimals = 2;

  // const rate = 10000;
  const rate = 1 //1是正确的
  const wallet = accounts[0];
  // const wallet = "0x0d8E708F9CfF2634169D7c221CF6bfA0C5731d63";
  return deployer.then(() => {
    return deployer.deploy(ECny, _name, _symbol, _decimals);
  }).then(() => {
    // return deployer.deploy(
    //   ECnyCrowdsale,
    //   rate,
    //   wallet,
    //   ECny.address
    // );
  }).then(async () => {
    // console.log('ECnyCrowdsale.address:', ECnyCrowdsale.address)
    // const eCny = await ECny.deployed();
    // await eCny.transfer(ECnyCrowdsale.address, await eCny.totalSupply());
  })
  //deployer.deploy(MyToken, _name, _symbol, _decimals);
};
