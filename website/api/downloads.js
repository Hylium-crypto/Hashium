// Vercel Serverless Function - Downloads API
export default function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');

    const downloads = [
        {
            id: 'macos',
            name: 'Hashium Wallet',
            version: 'v1.5.0',
            platform: 'macOS (Apple Silicon)',
            url: 'https://github.com/Hylium-crypto/Hashium/releases/latest/download/Hashium-v1.5.0-macOS.tar.gz',
        },
        {
            id: 'linux',
            name: 'Hashium Wallet',
            version: 'v1.5.0',
            platform: 'Linux (x86_64)',
            url: 'https://github.com/Hylium-crypto/Hashium/releases/latest/download/Hashium-v1.5.0-Linux.tar.gz',
        }
    ];

    res.status(200).json(downloads);
}
