const { ethers } = require("hardhat");
const fs = require('fs');

async function main() 
{
  const Contract = await ethers.getContractFactory("AegisNexus");
  const contract = await Contract.deploy();

  await contract.deployed();

  console.log("Deploying contracts with the account:", deployer.address);

  const address = JSON.stringify({address : contract.address }, null, 4)
  fs.writeFileSync('abis/address.json', address, 'utf8', (err) => 
  {
    if (err) 
    {
      console.log(err)
    }
    console.log('Deployed', contract.address)
  })
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
