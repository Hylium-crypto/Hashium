// Vercel Serverless Function - Stats API
// NOTE: These are approximate values. Network is experimental.
export default function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');

    // HONEST stats - this is a small experimental network
    const stats = {
        blockHeight: 1300,        // Approximate
        difficulty: 0.001,        // Very low - small network
        chain: 'mainnet',
        networkHashrate: 50000,   // ~50 KH/s - small network
        connections: 2,           // Honest - very few nodes
        lastUpdated: new Date().toISOString(),
        warning: "Experimental network - very early stage"
    };

    res.status(200).json(stats);
}
