const ECny = artifacts.require("ECny");
const ECnyCrowdsale = artifacts.require("ECnyCrowdsale");
const web3 = require("web3");

contract("ECny", async accounts => {
  it("transfer:", async () => {
    let eCnyInstance = await ECny.deployed();
    let saleInstance = await ECnyCrowdsale.deployed();
    const tokenName = await eCnyInstance.name();
    assert.equal(tokenName, 'ECny');
    const totalSupply = await eCnyInstance.totalSupply();
    // const balance = await eCnyInstance.balanceOf(saleInstance.address)
    console.log('eCnyInstance.address:', eCnyInstance.address);
    console.log('saleInstance.address:', saleInstance.address);
    const balance = await eCnyInstance.balanceOf(accounts[0]);
    console.log('totalSupply', web3.utils.fromWei(totalSupply, "wei" ));
    console.log('eCnyInstance owner', await eCnyInstance.owner.call());
    console.log('account[0] balance', web3.utils.fromWei(balance, "wei" ));
    await eCnyInstance.transfer(accounts[1], 1000);

    console.log('account[0] blanace', web3.utils.fromWei(await eCnyInstance.balanceOf(accounts[0]), "wei" ));
    console.log('account[1] blanace', web3.utils.fromWei(await eCnyInstance.balanceOf(accounts[1]), "wei" ));
    // await eCnyInstance.transferFrom(accounts[0], accounts[1], 1000)
    // 允许accounts[1]花1000
    await eCnyInstance.approve(accounts[1], 1000);

    // 以accounts[1]，替accounts[0]转账50块
    await eCnyInstance.transferFrom(accounts[0], accounts[3], 50,  { from: accounts[1] })
    console.log('account[0] blanace', web3.utils.fromWei(await eCnyInstance.balanceOf(accounts[0]), "wei" ));
    console.log('account[3] blanace', web3.utils.fromWei(await eCnyInstance.balanceOf(accounts[3]), "wei" ));

    await eCnyInstance.increaseAllowance(accounts[2], 1000);
    await eCnyInstance.transferFrom(accounts[0], accounts[3], 100, { from: accounts[2] });

    console.log('account[0] blanace', web3.utils.fromWei(await eCnyInstance.balanceOf(accounts[0]), "wei" ));
    console.log('account[3] blanace', web3.utils.fromWei(await eCnyInstance.balanceOf(accounts[3]), "wei" ));

    await eCnyInstance.transfer(saleInstance.address, 100000);
    console.log('saleInstance.address blanace', web3.utils.fromWei(await eCnyInstance.balanceOf(saleInstance.address), "wei" ));

    await saleInstance.buyTokens(accounts[5], {
      from: accounts[4],
      value: 1000
    })

    console.log('saleInstance weiRaised:', web3.utils.fromWei(await saleInstance.weiRaised(), 'wei'));
    console.log('account[4] blanace:', web3.utils.fromWei(await eCnyInstance.balanceOf(accounts[4]), "wei" ));
    console.log('account[5] blanace:', web3.utils.fromWei(await eCnyInstance.balanceOf(accounts[5]), "wei" ));
    console.log('saleInstance token:', await saleInstance.token());
    console.log('saleInstance wallet:', await saleInstance.wallet());
    console.log('saleInstance wallet:', (await saleInstance.rate()).toNumber());


  });
});