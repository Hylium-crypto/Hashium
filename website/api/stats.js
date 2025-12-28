// Vercel Serverless Function - Stats API
export default function handler(req, res) {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');

    // Return current network stats
    // In production, this would connect to a Hashium node
    const stats = {
        blockHeight: 1150,
        difficulty: 0.00024,
        chain: 'mainnet',
        networkHashrate: 125000,
        connections: 2,
        lastUpdated: new Date().toISOString(),
    };

    res.status(200).json(stats);
}
