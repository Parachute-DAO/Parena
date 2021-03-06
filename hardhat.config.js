require('@nomiclabs/hardhat-etherscan');
require('@nomiclabs/hardhat-waffle');


module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.13",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          }
        },
      },
    ]
  },
};
