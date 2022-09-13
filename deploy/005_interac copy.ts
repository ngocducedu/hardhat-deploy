import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';
// require('@openzeppelin/hardhat-upgrades');
// const { ethers, upgrades } = require("hardhat");

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {deployments, getNamedAccounts} = hre;
  const {deploy, execute, read, log} = deployments;

  const {deployer, tokenOwner} = await getNamedAccounts();

  
  await execute('Token',{from: deployer, log: true}, "setGreeting2", "BBB");

  const currentGreeting = await read('Token', 'getGreeting2');
  log({currentGreeting});
};

export default func;
func.tags = ['Token'];
