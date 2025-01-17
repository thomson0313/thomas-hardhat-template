const { expect } = require("chai");

describe("TokenCreator", function () {
  it("Should create a new token", async function () {
    const [owner] = await ethers.getSigners();
    const TokenCreator = await ethers.getContractFactory("TokenCreator");
    const tokenCreator = await TokenCreator.deploy();

    await tokenCreator.deployed();

    const tx = await tokenCreator.createToken("TestToken", "TTK");
    const receipt = await tx.wait();

    const tokenAddress = receipt.events[1].args.tokenAddress;
    const ERC20Token = await ethers.getContractAt("ERC20", tokenAddress);

    expect(await ERC20Token.name()).to.equal("TestToken");
    expect(await ERC20Token.symbol()).to.equal("TTK");
    expect((await ERC20Token.totalSupply()).toString()).to.equal(ethers.utils.parseEther("1000000").toString());
    expect((await ERC20Token.balanceOf(owner.address)).toString()).to.equal(ethers.utils.parseEther("1000000").toString());
  });
});
