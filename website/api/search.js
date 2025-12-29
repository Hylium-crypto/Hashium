// Vercel Serverless Function - Block/Transaction/Address Search API
// Searches blockchain for block height, tx hash, or address

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');

    const { q: query } = req.query;

    if (!query) {
        return res.status(400).json({ error: 'Query parameter "q" is required' });
    }

    // RPC configuration
    const RPC_HOST = process.env.HASHIUM_RPC_HOST || null;
    const RPC_PORT = process.env.HASHIUM_RPC_PORT || '9332';
    const RPC_USER = process.env.HASHIUM_RPC_USER || '';
    const RPC_PASS = process.env.HASHIUM_RPC_PASS || '';

    // Detect query type
    const queryType = detectQueryType(query);

    if (!RPC_HOST) {
        return res.status(503).json({
            error: 'Search not available',
            message: 'RPC node not configured. Coming soon!',
            queryType: queryType,
            query: query
        });
    }

    try {
        const rpcUrl = `http://${RPC_HOST}:${RPC_PORT}`;
        const auth = Buffer.from(`${RPC_USER}:${RPC_PASS}`).toString('base64');

        let result;

        switch (queryType) {
            case 'block_height':
                const height = parseInt(query);
                const hash = await rpcCall(rpcUrl, auth, 'getblockhash', [height]);
                const block = await rpcCall(rpcUrl, auth, 'getblock', [hash, 2]);
                result = {
                    type: 'block',
                    data: formatBlock(block)
                };
                break;

            case 'block_hash':
            case 'tx_hash':
                // Try as block hash first
                try {
                    const blockData = await rpcCall(rpcUrl, auth, 'getblock', [query, 2]);
                    result = {
                        type: 'block',
                        data: formatBlock(blockData)
                    };
                } catch {
                    // Try as transaction hash
                    const txData = await rpcCall(rpcUrl, auth, 'getrawtransaction', [query, true]);
                    result = {
                        type: 'transaction',
                        data: formatTx(txData)
                    };
                }
                break;

            case 'address':
                // For now, address lookup requires additional indexing
                result = {
                    type: 'address',
                    message: 'Address lookup coming soon! Requires txindex.'
                };
                break;

            default:
                return res.status(400).json({ error: 'Invalid search query' });
        }

        return res.status(200).json(result);

    } catch (error) {
        return res.status(404).json({
            error: 'Not found',
            message: error.message,
            queryType: queryType
        });
    }
}

function detectQueryType(query) {
    // Block height (numeric)
    if (/^\d+$/.test(query)) {
        return 'block_height';
    }
    // Block/Tx hash (64 hex chars)
    if (/^[a-fA-F0-9]{64}$/.test(query)) {
        return 'block_hash'; // Could be block or tx
    }
    // Hashium address (starts with K, N, or hyl1)
    if (/^(K|N)[a-km-zA-HJ-NP-Z1-9]{25,34}$/.test(query) || /^hyl1[a-z0-9]{39,59}$/.test(query)) {
        return 'address';
    }
    return 'unknown';
}

function formatBlock(block) {
    return {
        height: block.height,
        hash: block.hash,
        previousHash: block.previousblockhash,
        time: new Date(block.time * 1000).toISOString(),
        txCount: block.nTx,
        size: block.size,
        weight: block.weight,
        difficulty: block.difficulty,
        merkleRoot: block.merkleroot,
        nonce: block.nonce,
        transactions: block.tx?.slice(0, 10).map(tx => ({
            txid: tx.txid,
            size: tx.size,
            vout: tx.vout?.length || 0
        }))
    };
}

function formatTx(tx) {
    return {
        txid: tx.txid,
        hash: tx.hash,
        size: tx.size,
        vsize: tx.vsize,
        blockHash: tx.blockhash,
        confirmations: tx.confirmations,
        time: tx.time ? new Date(tx.time * 1000).toISOString() : null,
        inputs: tx.vin?.length || 0,
        outputs: tx.vout?.length || 0
    };
}

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
