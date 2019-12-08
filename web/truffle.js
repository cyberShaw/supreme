module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "localhost",
      port: 9545,
      network_id: "*",
    }
  },
  compilers: {
    solc: {
      version: "0.4.20"  // ex:  "0.4.20". (Default: Truffle's installed solc)
    }
  }
};
