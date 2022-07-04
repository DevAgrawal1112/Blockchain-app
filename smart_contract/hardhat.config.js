require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.alchemyapi.io/v2/GlbtgiOpsCBaTN07GvWe94RcIfNwfBl4',
      accounts: ['e65335e2f9e32dbbcabdb2356ddd6200896b6f4150258f9d33884e5788ae4369']
    }
  }
}