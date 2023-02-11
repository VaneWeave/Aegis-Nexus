const Web3 = require("web3");
const { ethers } = require("hardhat");

async function main() {
  // Get the signer (an Ethereum account)
  const signer = await ethers.getSigner();

  // Connect to the Ethereum network
  const web3 = new Web3(`http://localhost:8545`);

  // Get the contract bytecode and ABI
  const Contract1 = require("../abis/contracts/AegisNexus.sol/AegisNexus.json");
  const Contract2 = require("../abis/contracts/DocRepo.sol/DocRepo.json");


  // Deploy the first contract
  const contract1 = new web3.eth.Contract(Contract1.abi);
  const contract1Instance = await contract1
    .deploy({ data: Contract1.bytecode })
    .send({ from: signer.getAddress(), gas: 6721975 });
  console.log("Contract 1 deployed at", contract1Instance.options.address);

  // Deploy the second contract
  const contract2 = new web3.eth.Contract(Contract2.abi);
  const contract2Instance = await contract2
    .deploy({ data: Contract2.bytecode })
    .send({ from: signer.getAddress(), gas: 6721975 });
  console.log("Contract 2 deployed at", contract2Instance.options.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });