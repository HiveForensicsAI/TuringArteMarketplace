
const hre = require("hardhat");

async function main() {

  const NFTMarketplace = await hre.ethers.getContractFactory("NFTMarketplace");
  const nftMarkeplace = await NFTMarketplace.deploy();

  await nftMarkeplace.deployed();

  console.log("NFTMarketplace deployed to:", nftMarkeplace.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

