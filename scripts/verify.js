async function main() {
    const hre = require("hardhat");

    const contracts = [
        {
            address: process.env.CONTRACT_ADDRESS,
            constructorArgs: [],
        },
    ];

    for (const contract of contracts) {
        console.log(`Verifying contract at address: ${contract.address}`);
        try {
            await hre.run("verify:verify", {
                address: contract.address,
                constructorArguments: contract.constructorArgs,
            });
            console.log(`Contract verified: ${contract.address}`);
        } catch (err) {
            console.error(`Verification failed for ${contract.address}:`, err);
        }
    }
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });