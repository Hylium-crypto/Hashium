// Vercel Serverless Function - Stats API
export default function handler(req, res) {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');

    // Return current network stats
    // These values are for display purposes
    const stats = {
        blockHeight: 1247,
        difficulty: 4.52,
        chain: 'mainnet',
        networkHashrate: 185000000, // 185 MH/s
        connections: 3,
        lastUpdated: new Date().toISOString(),
    };

    res.status(200).json(stats);
}
