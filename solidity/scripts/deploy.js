const Web3 = require("web3");
const { bytecode, abi } = require("../abis/contracts/AegisNexus.sol/AegisNexus.json");

const provider = new Web3.providers.HttpProvider("https://goerli.infura.io/v3/908180dff7f94c5f8f520dd4b237193e");
const web3 = new Web3(provider);

(async () => {
  const accounts = await web3.eth.getAccounts();
  console.log("Deploying contract from account", accounts[0]);

  const deploymentResult = await new web3.eth.Contract(abi)
    .deploy({ data: bytecode })
    .send({ from: accounts[0], gas: "1000000" });

  console.log("Contract deployed at address", deploymentResult.options.address);
})();