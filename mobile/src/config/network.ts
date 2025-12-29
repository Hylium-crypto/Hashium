// Hashium Network Configuration
// Based on Bitcoin network but with Hashium-specific parameters

export const networks = {
    hashium: {
        messagePrefix: '\x18Hashium Signed Message:\n',
        bech32: 'hyl',
        bip32: {
            public: 0x0488b21e,
            private: 0x0488ade4,
        },
        pubKeyHash: 0x26, // 38 = 'K' addresses
        scriptHash: 0x35, // 53 = 'N' addresses
        wif: 0x80,
    },
    hashiumTestnet: {
        messagePrefix: '\x18Hashium Testnet Signed Message:\n',
        bech32: 'thyl',
        bip32: {
            public: 0x043587cf,
            private: 0x04358394,
        },
        pubKeyHash: 0x6f,
        scriptHash: 0xc4,
        wif: 0xef,
    },
};

export const HASHIUM_NETWORK = networks.hashium;

// Electrum servers (when available)
export const ELECTRUM_SERVERS = [
    // { host: 'electrum.hashium.org', port: 50002, ssl: true }
];

// Block explorer
export const EXPLORER_URL = 'https://hashium-website.vercel.app';

// Coin parameters
export const COIN = {
    name: 'Hashium',
    symbol: 'HSM',
    decimals: 8,
    satoshi: 100000000,
};
