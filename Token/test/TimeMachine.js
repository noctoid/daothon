const MatatakiTimeMachine = artifacts.require("MatatakiTimeMachine");

contract("2nd MatatakiTimeMachine test", async accounts => {
  it("should put new article data", async () => {
    let instance = await MatatakiTimeMachine.deployed();
    const currentRevision = await instance.getCurrentRevisionId.call(accounts[0], 1145141919);
    assert.equal(currentRevision, 0);
    await instance.updateIpfsHash(accounts[0], 1145141919, "Qm123456789");
    const newRevision = await instance.getCurrentRevisionId.call(accounts[0], 1145141919, "Qm123456789");
    assert.equal(newRevision, 1);
  });

  it("should update article revision data correctly", async () => {
    await instance.updateIpfsHash(accounts[0], 1145141919, "Qm123456789");
    const currentRevision = await instance.getCurrentRevisionId.call(accounts[0], 1145141919);
    assert.isAbove(currentRevision, 0);
    await instance.updateIpfsHash(accounts[0], 1145141919, "Qm1145141919");
    const newRevision = await instance.getCurrentRevisionId.call(accounts[0], 1145141919, "Qm123456789");
    assert.isAbove(newRevision, currentRevision);
  });
});