const { ethers } = require("hardhat");
const fs = require('fs');

async function main() 
{
  const base_uri = "";
  const Contract = await ethers.getContractFactory("AegisNexus");
  const contract = await Contract.deploy();

  await contract.deployed();

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