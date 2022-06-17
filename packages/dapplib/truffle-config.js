require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture stomach response often mistake include end army general'; 
let testAccounts = [
"0xbb075ad5a0450cb1fe9a699cf7773a0a7367f86d23e2f23a2564296a1119a3f7",
"0x6c29dfd8ee1c8107c43efe098c9df1fc04768bdde543faf9a98df64c27e939ed",
"0xd6a933b51ccd6d8cb28e800cec85439c0d4162381933d6aecdfc8f71fcfeea41",
"0x866d303b485a07d285ef699b32b36b064b32b8bcb336fe8eff456f8a5f5ea724",
"0xe0f85355e7dfd29ba37828a101341a5cf17c41407ecfdc02976ad8a7bf4e8e48",
"0x071bf8b23c2dcb275473f90a75eca5ae263183e1dec74f286969605971cb11f9",
"0x3c1cb4c4b79089363fcf541610483b3f6d8a40e2e5f32565c00804424446d9b6",
"0xa30e2e5ce1984d9812a7c21bf581c5a553e5687ee818332d437d7b4411404813",
"0xbe40011868daf88ef9f5958db37c3f44356bb683344583bc69c5a9f6cfb2fd81",
"0x25757fc5226a3565b42140632e6c634e288fce6d43526358088ce14847b2f2f4"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

