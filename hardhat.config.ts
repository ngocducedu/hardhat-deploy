import {HardhatUserConfig} from 'hardhat/types';
import 'hardhat-deploy';
import 'hardhat-deploy-ethers';
import {node_url, accounts, getApiKey} from './utils/network';

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.6',
  },
  networks: {
    bsctestnet: {
      url: `https://data-seed-prebsc-1-s3.binance.org:8545`,
      accounts: accounts('bsctestnet'),
    },
    bsctestnet2: {
      url: `https://data-seed-prebsc-1-s3.binance.org:8545`,
      accounts: accounts('bsctestnet'),
    },
  },
  namedAccounts: {
    deployer: 0,
    tokenOwner: 1,
  },
  paths: {
    sources: 'src',
  },
};
export default config;
