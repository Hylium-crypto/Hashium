// Vercel Serverless Function - Recent Blocks API
// Returns recent blocks from RPC node

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');

    const count = Math.min(parseInt(req.query.count) || 10, 25);

    // RPC configuration
    const RPC_HOST = process.env.HASHIUM_RPC_HOST || null;
    const RPC_PORT = process.env.HASHIUM_RPC_PORT || '9332';
    const RPC_USER = process.env.HASHIUM_RPC_USER || '';
    const RPC_PASS = process.env.HASHIUM_RPC_PASS || '';

    if (RPC_HOST) {
        try {
            const rpcUrl = `http://${RPC_HOST}:${RPC_PORT}`;
            const auth = Buffer.from(`${RPC_USER}:${RPC_PASS}`).toString('base64');

            // Get current height
            const chainInfo = await rpcCall(rpcUrl, auth, 'getblockchaininfo', []);
            const currentHeight = chainInfo.blocks;

            // Fetch recent blocks
            const blocks = [];
            for (let i = 0; i < count && currentHeight - i >= 0; i++) {
                const height = currentHeight - i;
                const hash = await rpcCall(rpcUrl, auth, 'getblockhash', [height]);
                const block = await rpcCall(rpcUrl, auth, 'getblock', [hash]);

                blocks.push({
                    height: block.height,
                    hash: block.hash,
                    txCount: block.nTx,
                    time: new Date(block.time * 1000).toISOString(),
                    size: block.size,
                    difficulty: block.difficulty
                });
            }

            return res.status(200).json({
                blocks: blocks,
                source: 'live'
            });
        } catch (error) {
            console.error('RPC Error:', error.message);
        }
    }

    // Fallback: generate placeholder blocks
    const blocks = Array.from({ length: count }, (_, i) => ({
        height: 13500 - i,
        hash: `0000000000${(13500 - i).toString(16).padStart(10, '0')}...`,
        txCount: 1 + (i % 3),
        time: new Date(Date.now() - i * 600000).toISOString(),
        size: 250 + (i % 10) * 50
    }));

    res.status(200).json({
        blocks: blocks,
        source: 'estimate',
        warning: "Placeholder data - RPC not configured"
    });
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
