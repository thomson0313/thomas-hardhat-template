async function main() {
    const TokenCreator = await ethers.getContractFactory("TokenCreator");
    const tokenCreator = await TokenCreator.deploy();

    await tokenCreator.deployed();
    console.log("TokenCreator deployed to:", tokenCreator.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});