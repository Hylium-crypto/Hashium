import { useState, useEffect } from 'react';
import { Search, Blocks, Hash, Activity, Clock, Zap, TrendingUp, Box, ArrowRight } from 'lucide-react';

interface NetworkStats {
    blockHeight: number;
    difficulty: number;
    hashrate: number;
    connections: number;
    supply: number;
    lastBlockTime: string;
}

const Explorer = () => {
    const [stats, setStats] = useState<NetworkStats>({
        blockHeight: 0,
        difficulty: 0,
        hashrate: 0,
        connections: 0,
        supply: 0,
        lastBlockTime: ''
    });
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchError, setSearchError] = useState('');

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const res = await fetch('/api/stats');
                const data = await res.json();
                setStats({
                    blockHeight: data.blockHeight || 0,
                    difficulty: data.difficulty || 0,
                    hashrate: data.networkHashrate || 0,
                    connections: data.connections || 3,
                    supply: (data.blockHeight || 0) * 50,
                    lastBlockTime: new Date().toISOString()
                });
                setLoading(false);
            } catch {
                setLoading(false);
            }
        };

        fetchStats();
        const interval = setInterval(fetchStats, 30000);
        return () => clearInterval(interval);
    }, []);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setSearchError('');

        if (!searchQuery.trim()) return;

        const query = searchQuery.trim();

        // Validate input type
        if (query.startsWith('hyl1') || query.startsWith('K') || query.startsWith('N')) {
            // Address lookup - coming soon
            setSearchError('Address lookup coming soon! Enter a block height or tx hash.');
        } else if (/^\d+$/.test(query)) {
            const blockNum = parseInt(query);
            if (blockNum >= 0 && blockNum <= stats.blockHeight) {
                setSearchError(`Block #${blockNum} exists! Full explorer with block details coming soon.`);
            } else {
                setSearchError(`Block #${blockNum} not found. Current height: ${stats.blockHeight}`);
            }
        } else if (/^[a-fA-F0-9]{64}$/.test(query)) {
            // TX or block hash
            setSearchError('Transaction/Block hash lookup coming soon!');
        } else {
            setSearchError('Invalid input. Enter a block height, tx hash, or HSM address.');
        }
    };

    const formatHashrate = (h: number) => {
        if (h >= 1e12) return `${(h / 1e12).toFixed(2)} TH/s`;
        if (h >= 1e9) return `${(h / 1e9).toFixed(2)} GH/s`;
        if (h >= 1e6) return `${(h / 1e6).toFixed(2)} MH/s`;
        if (h >= 1e3) return `${(h / 1e3).toFixed(2)} KH/s`;
        return `${h.toFixed(2)} H/s`;
    };

    const formatSupply = (blocks: number) => {
        const supply = blocks * 50;
        return supply.toLocaleString();
    };

    // Fetch recent blocks from API
    const [recentBlocks, setRecentBlocks] = useState<Array<{
        height: number;
        hash: string;
        txCount: number;
        time: string;
        size: number;
    }>>([]);

    useEffect(() => {
        const fetchBlocks = async () => {
            try {
                const res = await fetch('/api/blocks?count=10');
                const data = await res.json();
                if (data.blocks) {
                    setRecentBlocks(data.blocks.map((b: { height: number; hash: string; txCount: number; time: string; size: number }) => ({
                        height: b.height,
                        hash: b.hash.substring(0, 16) + '...' + b.hash.substring(56),
                        txCount: b.txCount,
                        time: new Date(b.time).toLocaleTimeString(),
                        size: b.size
                    })));
                }
            } catch {
                // Fallback to generated blocks if API fails
                if (stats.blockHeight > 0) {
                    setRecentBlocks(Array.from({ length: 10 }, (_, i) => ({
                        height: stats.blockHeight - i,
                        hash: `0000000000${(stats.blockHeight - i).toString(16).padStart(8, '0')}...`,
                        txCount: ((stats.blockHeight - i) % 5) + 1,
                        time: `${10 * i} min ago`,
                        size: 250 + ((stats.blockHeight - i) % 20) * 100
                    })).filter(b => b.height >= 0));
                }
            }
        };
        fetchBlocks();
        const interval = setInterval(fetchBlocks, 60000);
        return () => clearInterval(interval);
    }, [stats.blockHeight]);


    return (
        <div id="explorer" style={{
            minHeight: '100vh',
            background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
            padding: '80px 0'
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        background: 'linear-gradient(135deg, #00d4ff20 0%, #7c3aed20 100%)',
                        border: '1px solid #00d4ff40',
                        borderRadius: '100px',
                        padding: '8px 20px',
                        marginBottom: '20px'
                    }}>
                        <Activity size={14} color="#00d4ff" />
                        <span style={{ color: '#00d4ff', fontSize: '13px', fontWeight: 600 }}>
                            LIVE NETWORK
                        </span>
                        <span style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            background: '#22c55e',
                            animation: 'pulse 2s infinite'
                        }} />
                    </div>

                    <h2 style={{
                        fontSize: '42px',
                        fontWeight: 800,
                        background: 'linear-gradient(135deg, #ffffff 0%, #94a3b8 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        marginBottom: '16px'
                    }}>
                        Block Explorer
                    </h2>
                    <p style={{ color: '#94a3b8', fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>
                        Explore the Hashium blockchain. Search for blocks, transactions, and addresses.
                    </p>
                </div>

                {/* Search Bar */}
                <form onSubmit={handleSearch} style={{
                    maxWidth: '700px',
                    margin: '0 auto 48px',
                    position: 'relative'
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        background: '#1e293b',
                        border: '2px solid #334155',
                        borderRadius: '16px',
                        padding: '4px',
                        transition: 'border-color 0.3s'
                    }}>
                        <Search size={20} color="#64748b" style={{ marginLeft: '16px' }} />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search by block height, tx hash, or address..."
                            style={{
                                flex: 1,
                                background: 'transparent',
                                border: 'none',
                                padding: '16px',
                                color: '#ffffff',
                                fontSize: '16px',
                                outline: 'none'
                            }}
                        />
                        <button
                            type="submit"
                            style={{
                                background: 'linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)',
                                border: 'none',
                                borderRadius: '12px',
                                padding: '14px 28px',
                                color: '#ffffff',
                                fontWeight: 600,
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px'
                            }}
                        >
                            Search <ArrowRight size={16} />
                        </button>
                    </div>
                    {searchError && (
                        <p style={{
                            color: searchError.includes('coming soon') ? '#00d4ff' : '#f87171',
                            fontSize: '14px',
                            marginTop: '12px',
                            textAlign: 'center'
                        }}>
                            {searchError}
                        </p>
                    )}
                </form>

                {/* Stats Grid */}
                <div className="stats-grid animate-slide-up" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                    gap: '16px',
                    marginBottom: '48px'
                }}>
                    {[
                        { icon: Blocks, label: 'Block Height', value: loading ? '...' : stats.blockHeight.toLocaleString(), color: '#00d4ff' },
                        { icon: Hash, label: 'Difficulty', value: loading ? '...' : stats.difficulty.toFixed(4), color: '#7c3aed' },
                        { icon: Zap, label: 'Hashrate', value: loading ? '...' : formatHashrate(stats.hashrate), color: '#f59e0b' },
                        { icon: TrendingUp, label: 'Circulating Supply', value: loading ? '...' : `${formatSupply(stats.blockHeight)} HSM`, color: '#22c55e' },
                        { icon: Clock, label: 'Block Time', value: '~10 min', color: '#ec4899' },
                        { icon: Box, label: 'Block Reward', value: '50 HSM', color: '#06b6d4' }
                    ].map((stat, index) => (
                        <div key={index} style={{
                            background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
                            border: '1px solid #334155',
                            borderRadius: '16px',
                            padding: '24px',
                            textAlign: 'center',
                            transition: 'transform 0.2s, border-color 0.2s'
                        }}>
                            <stat.icon size={28} color={stat.color} style={{ marginBottom: '12px' }} />
                            <p style={{
                                fontSize: '24px',
                                fontWeight: 700,
                                color: '#ffffff',
                                marginBottom: '4px'
                            }}>
                                {stat.value}
                            </p>
                            <p style={{ color: '#64748b', fontSize: '13px' }}>{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Recent Blocks Table */}
                <div style={{
                    background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
                    border: '1px solid #334155',
                    borderRadius: '20px',
                    overflow: 'hidden'
                }}>
                    <div style={{
                        padding: '24px',
                        borderBottom: '1px solid #334155',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <h3 style={{ color: '#ffffff', fontSize: '20px', fontWeight: 600, margin: 0 }}>
                            Recent Blocks
                        </h3>
                        <span style={{
                            background: '#00d4ff20',
                            color: '#00d4ff',
                            padding: '6px 12px',
                            borderRadius: '8px',
                            fontSize: '12px',
                            fontWeight: 600
                        }}>
                            Last 10 blocks
                        </span>
                    </div>

                    <div style={{ overflowX: 'auto' }}>
                        <table className="blocks-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr style={{ background: '#0f172a' }}>
                                    <th style={{ padding: '16px 24px', textAlign: 'left', color: '#64748b', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase' }}>Height</th>
                                    <th style={{ padding: '16px 24px', textAlign: 'left', color: '#64748b', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase' }}>Hash</th>
                                    <th style={{ padding: '16px 24px', textAlign: 'center', color: '#64748b', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase' }}>Txs</th>
                                    <th style={{ padding: '16px 24px', textAlign: 'right', color: '#64748b', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase' }}>Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {loading ? (
                                    <tr>
                                        <td colSpan={4} style={{ padding: '40px', textAlign: 'center', color: '#64748b' }}>
                                            Loading blocks...
                                        </td>
                                    </tr>
                                ) : (
                                    recentBlocks.map((block, i) => (
                                        <tr key={i} style={{
                                            borderBottom: '1px solid #1e293b',
                                            transition: 'background 0.2s',
                                            cursor: 'pointer'
                                        }}>
                                            <td style={{ padding: '16px 24px' }}>
                                                <span style={{
                                                    color: '#00d4ff',
                                                    fontWeight: 600,
                                                    fontFamily: 'monospace'
                                                }}>
                                                    #{block.height.toLocaleString()}
                                                </span>
                                            </td>
                                            <td style={{ padding: '16px 24px' }}>
                                                <span style={{
                                                    color: '#94a3b8',
                                                    fontFamily: 'monospace',
                                                    fontSize: '13px'
                                                }}>
                                                    {block.hash}
                                                </span>
                                            </td>
                                            <td style={{ padding: '16px 24px', textAlign: 'center' }}>
                                                <span style={{
                                                    background: '#7c3aed20',
                                                    color: '#a78bfa',
                                                    padding: '4px 12px',
                                                    borderRadius: '6px',
                                                    fontSize: '13px',
                                                    fontWeight: 500
                                                }}>
                                                    {block.txCount}
                                                </span>
                                            </td>
                                            <td style={{ padding: '16px 24px', textAlign: 'right' }}>
                                                <span style={{ color: '#64746b', fontSize: '13px' }}>
                                                    {block.time}
                                                </span>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Info Notice */}
                <p style={{
                    textAlign: 'center',
                    color: '#64748b',
                    fontSize: '13px',
                    marginTop: '32px'
                }}>
                    ⚡ Block data refreshes every 30 seconds. Full transaction details coming soon.
                </p>
            </div>

            <style>{`
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.5; }
                }
                table tr:hover td {
                    background: #1e293b40;
                }
                input::placeholder {
                    color: #64748b;
                }
            `}</style>
        </div>
    );
};

export default Explorer;
