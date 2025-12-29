// Vercel Serverless Function - Stats API
// Fetches real data from RPC node if available, falls back to estimates

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Cache-Control', 's-maxage=30, stale-while-revalidate');

    // RPC configuration (set via Vercel environment variables)
    const RPC_HOST = process.env.HASHIUM_RPC_HOST || null;
    const RPC_PORT = process.env.HASHIUM_RPC_PORT || '9332';
    const RPC_USER = process.env.HASHIUM_RPC_USER || '';
    const RPC_PASS = process.env.HASHIUM_RPC_PASS || '';

    // Try to fetch real data if RPC is configured
    if (RPC_HOST) {
        try {
            const rpcUrl = `http://${RPC_HOST}:${RPC_PORT}`;
            const auth = Buffer.from(`${RPC_USER}:${RPC_PASS}`).toString('base64');

            // Fetch blockchain info
            const chainInfo = await rpcCall(rpcUrl, auth, 'getblockchaininfo', []);
            const networkInfo = await rpcCall(rpcUrl, auth, 'getnetworkinfo', []);
            const miningInfo = await rpcCall(rpcUrl, auth, 'getmininginfo', []);

            const stats = {
                blockHeight: chainInfo.blocks,
                difficulty: chainInfo.difficulty,
                chain: chainInfo.chain,
                networkHashrate: miningInfo.networkhashps,
                connections: networkInfo.connections,
                version: networkInfo.subversion,
                lastUpdated: new Date().toISOString(),
                source: 'live'
            };

            return res.status(200).json(stats);
        } catch (error) {
            console.error('RPC Error:', error.message);
            // Fall through to estimated data
        }
    }

    // Fallback: estimated stats for when RPC is not available
    // These should be updated periodically
    const stats = {
        blockHeight: 13500,       // Approximate - update regularly
        difficulty: 0.002,        // Low - small network
        chain: 'mainnet',
        networkHashrate: 100000,  // ~100 KH/s estimate
        connections: 3,           // Small network
        lastUpdated: new Date().toISOString(),
        source: 'estimate',
        warning: "Estimated data - RPC not configured"
    };

    res.status(200).json(stats);
}

// Helper function for RPC calls
async function rpcCall(url, auth, method, params) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${auth}`
        },
        body: JSON.stringify({
            jsonrpc: '1.0',
            id: Date.now(),
            method: method,
            params: params
        })
    });

    if (!response.ok) {
        throw new Error(`RPC request failed: ${response.status}`);
    }

    const data = await response.json();
    if (data.error) {
        throw new Error(data.error.message);
    }

    return data.result;
}
