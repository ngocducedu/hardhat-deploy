import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {deployments, getNamedAccounts} = hre;
  const {read, log} = deployments;

  // view function
  // const currentGreeting = await read('Token', 'getGreeting');
  // log({currentGreeting});
};

export default func;
func.tags = ['Token'];
