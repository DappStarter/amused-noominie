require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh skull drift rescue sad unit harvest infant flock gift'; 
let testAccounts = [
"0xd66d498136e84608476892d3b9ef2aea34c45875a26911724269380de3f94b33",
"0xd1ff0cf9b43922e65ba82ffc10b41563067a3abeaaf6bd99d091c22a4085d0eb",
"0x50c5de192fb459617b40b8b5d6d06313fb081cf2da75c0d670efff94bd2975e5",
"0x325b198d4f25c8fbc9ef10a1d003e139992dd228c404c8c3a132ba3d5ff71499",
"0x205c4f583f32a55d8e60fcb9586e17f94501f887769b65812732a6210302aa19",
"0xc13bde2f4d30c357a8f120598d79c2102ffb8bf846c9e2a8e59ca67b368e0c30",
"0xe3b1829b8795f2e56086e109ae5232c08f2e667908e5799c9352614d6fb51883",
"0x07a0a79060a04c4f09e1de71cb9043a475fd4d5753c9fec7be8cb4d9be948625",
"0xd227c0a70ed2a78fc1e2b4594686c134b63e2df13840ccadba078deb980f056e",
"0x327602d4f5e3872b7ba2d3d3aeafe6c2bd3fee6d0d35d51e0299eb087b226f1f"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
