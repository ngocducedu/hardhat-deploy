import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';
// require('@openzeppelin/hardhat-upgrades');
// const { ethers, upgrades } = require("hardhat");

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {deployments, getNamedAccounts} = hre;
  const {deploy} = deployments;

  const {deployer, tokenOwner} = await getNamedAccounts();

  await deploy('Token', {
    contract: 'Token',
    from: deployer,
    proxy: "getGreeting2",
    args: [],
    log: true,
  });
};
export default func;
func.tags = ['Token'];
