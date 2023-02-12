// const Web3 = require("web3");
// const { ethers } = require("hardhat");

// async function main() {
//   // Get the signer (an Ethereum account)
//   const signer = await ethers.getSigner();

//   // Connect to the Ethereum network
//   const web3 = new Web3(`http://localhost:8545`);

//   // Get the contract bytecode and ABI
//   const Contract1 = require("../abis/contracts/AegisNexus.sol/AegisNexus.json");
//   const Contract2 = require("../abis/contracts/DocRepo.sol/DocRepo.json");


//   // Deploy the first contract
//   const contract1 = new web3.eth.Contract(Contract1.abi);
//   const contract1Instance = await contract1
//     .deploy({ data: Contract1.bytecode })
//     .send({ from: signer.getAddress(), gas: 6721975 });
//   console.log("Contract 1 deployed at", contract1Instance.options.address);

//   // Deploy the second contract
//   const contract2 = new web3.eth.Contract(Contract2.abi);
//   const contract2Instance = await contract2
//     .deploy({ data: Contract2.bytecode })
//     .send({ from: signer.getAddress(), gas: 6721975 });
//   console.log("Contract 2 deployed at", contract2Instance.options.address);
// }

// main()
//   .then(() => process.exit(0))
//   .catch(error => {
//     console.error(error);
//     process.exit(1);
//   });


const Web3 = require('web3');
const fs = require('fs');

// Connect to the Ethereum network
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

//   // Get the contract bytecode and ABI
  const Contract1 = require("../abis/contracts/AegisNexus.sol/AegisNexus.json");
  const Contract2 = require("../abis/contracts/DocRepo.sol/DocRepo.json");

// Read the compiled contract code
const contract1Code = Contract1.bytecode;
const contract2Code = Contract2.bytecode;

// Contract object of the first contract
const contract1 = new web3.eth.Contract(Contract1.abi);

// Contract object of the second contract
const contract2 = new web3.eth.Contract(Contract2.abi);

// Deploy the first contract
contract1.deploy({
  data: '0x' + contract1Code
})
.send({
  from: 'YOUR_ACCOUNT_ADDRESS',
  gas: '2000000'
}, function(error, transactionHash) {
  if (error) {
    console.log(error);
  } else {
    console.log('Transaction hash: ' + transactionHash);
  }
})
.on('error', function(error) {
  console.log(error);
})
.on('transactionHash', function(transactionHash) {
  console.log('Transaction hash: ' + transactionHash);
})
.on('receipt', function(receipt) {
  console.log('Receipt: ' + JSON.stringify(receipt));
})
.on('confirmation', function(confirmationNumber, receipt) {
  console.log('Confirmation number: ' + confirmationNumber);
})
.then(function(newContractInstance) {
  console.log('Contract address: ' + newContractInstance.options.address);

  // Deploy the second contract
  contract2.deploy({
    data: '0x' + contract2Code,
    arguments: [newContractInstance.options.address]
  })
  .send({
    from: 'YOUR_ACCOUNT_ADDRESS',
    gas: '2000000'
  }, function(error, transactionHash) {
    if (error) {
      console.log(error);
    } else {
      console.log('Transaction hash: ' + transactionHash);
    }
  })
  .on('error', function(error) {
    console.log(error);
  })
  .on('transactionHash', function(transactionHash) {
    console.log('Transaction hash: ' + transactionHash);
  })
  .on('receipt', function(receipt) {
    console.log('Receipt: ' + JSON.stringify(receipt));
  })
  .on('confirmation', function(confirmationNumber, receipt) {
    console.log('Confirmation number: ' + confirmationNumber);
  })
  .then(function(newContractInstance) {
    console.log('Contract address: ' + newContractInstance.options.address);
  });
});
