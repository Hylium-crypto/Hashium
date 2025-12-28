import { useState, useEffect } from 'react';
import { Blocks, Clock, Hash, ArrowRight } from 'lucide-react';

interface Block {
    height: number;
    hash: string;
    time: string;
    txCount: number;
    size: number;
}

// Simulated block data - in production this would come from a real API
const generateBlocks = (): Block[] => {
    const blocks: Block[] = [];
    const baseTime = Date.now();

    for (let i = 0; i < 10; i++) {
        blocks.push({
            height: 1300 - i,
            hash: `0000000${Math.random().toString(16).slice(2, 10)}${Math.random().toString(16).slice(2, 18)}...`,
            time: new Date(baseTime - i * 600000).toLocaleTimeString(),
            txCount: Math.floor(Math.random() * 5) + 1,
            size: Math.floor(Math.random() * 500) + 250,
        });
    }
    return blocks;
};

const Explorer = () => {
    const [blocks, setBlocks] = useState<Block[]>([]);
    const [stats, setStats] = useState({ blockHeight: 0, difficulty: 0, hashrate: 0 });

    useEffect(() => {
        setBlocks(generateBlocks());

        // Fetch stats from API
        fetch('/api/stats')
            .then(res => res.json())
            .then(data => setStats({
                blockHeight: data.blockHeight,
                difficulty: data.difficulty,
                hashrate: data.networkHashrate
            }))
            .catch(() => { });
    }, []);

    return (
        <div style={{
            minHeight: '100vh',
            background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
            paddingTop: '100px',
            paddingBottom: '60px'
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                    <h1 style={{
                        fontSize: '36px',
                        fontWeight: 700,
                        color: '#0f172a',
                        marginBottom: '12px'
                    }}>
                        Block Explorer
                    </h1>
                    <p style={{ color: '#64748b', fontSize: '16px' }}>
                        ⚠️ Experimental Network - Data may be simulated
                    </p>
                </div>

                {/* Stats Cards */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '20px',
                    marginBottom: '40px'
                }}>
                    <div style={{
                        background: '#ffffff',
                        borderRadius: '16px',
                        padding: '24px',
                        border: '1px solid #e2e8f0',
                        textAlign: 'center'
                    }}>
                        <Blocks size={28} color="#00d4ff" style={{ marginBottom: '12px' }} />
                        <p style={{ fontSize: '28px', fontWeight: 700, color: '#0f172a' }}>
                            {stats.blockHeight.toLocaleString()}
                        </p>
                        <p style={{ color: '#64748b', fontSize: '14px' }}>Block Height</p>
                    </div>
                    <div style={{
                        background: '#ffffff',
                        borderRadius: '16px',
                        padding: '24px',
                        border: '1px solid #e2e8f0',
                        textAlign: 'center'
                    }}>
                        <Hash size={28} color="#00d4ff" style={{ marginBottom: '12px' }} />
                        <p style={{ fontSize: '28px', fontWeight: 700, color: '#0f172a' }}>
                            {stats.difficulty}
                        </p>
                        <p style={{ color: '#64748b', fontSize: '14px' }}>Difficulty</p>
                    </div>
                    <div style={{
                        background: '#ffffff',
                        borderRadius: '16px',
                        padding: '24px',
                        border: '1px solid #e2e8f0',
                        textAlign: 'center'
                    }}>
                        <Clock size={28} color="#00d4ff" style={{ marginBottom: '12px' }} />
                        <p style={{ fontSize: '28px', fontWeight: 700, color: '#0f172a' }}>
                            {(stats.hashrate / 1000).toFixed(1)} KH/s
                        </p>
                        <p style={{ color: '#64748b', fontSize: '14px' }}>Network Hashrate</p>
                    </div>
                </div>

                {/* Recent Blocks */}
                <div style={{
                    background: '#ffffff',
                    borderRadius: '20px',
                    border: '1px solid #e2e8f0',
                    overflow: 'hidden'
                }}>
                    <div style={{
                        padding: '20px 24px',
                        borderBottom: '1px solid #e2e8f0',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px'
                    }}>
                        <Blocks size={20} color="#0891b2" />
                        <h2 style={{ fontSize: '18px', fontWeight: 600, color: '#0f172a', margin: 0 }}>
                            Recent Blocks
                        </h2>
                    </div>

                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr style={{ background: '#f8fafc' }}>
                                    <th style={{ padding: '14px 20px', textAlign: 'left', color: '#64748b', fontSize: '13px', fontWeight: 600 }}>Height</th>
                                    <th style={{ padding: '14px 20px', textAlign: 'left', color: '#64748b', fontSize: '13px', fontWeight: 600 }}>Hash</th>
                                    <th style={{ padding: '14px 20px', textAlign: 'left', color: '#64748b', fontSize: '13px', fontWeight: 600 }}>Time</th>
                                    <th style={{ padding: '14px 20px', textAlign: 'left', color: '#64748b', fontSize: '13px', fontWeight: 600 }}>Txs</th>
                                    <th style={{ padding: '14px 20px', textAlign: 'left', color: '#64748b', fontSize: '13px', fontWeight: 600 }}>Size</th>
                                </tr>
                            </thead>
                            <tbody>
                                {blocks.map((block, i) => (
                                    <tr key={block.height} style={{
                                        borderBottom: i < blocks.length - 1 ? '1px solid #f1f5f9' : 'none',
                                        cursor: 'pointer',
                                        transition: 'background 0.2s'
                                    }}
                                        onMouseEnter={(e) => e.currentTarget.style.background = '#f8fafc'}
                                        onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                                    >
                                        <td style={{ padding: '16px 20px' }}>
                                            <span style={{
                                                color: '#0891b2',
                                                fontWeight: 600,
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '6px'
                                            }}>
                                                {block.height}
                                                <ArrowRight size={14} />
                                            </span>
                                        </td>
                                        <td style={{ padding: '16px 20px' }}>
                                            <code style={{
                                                fontSize: '13px',
                                                color: '#475569',
                                                background: '#f1f5f9',
                                                padding: '4px 8px',
                                                borderRadius: '4px'
                                            }}>
                                                {block.hash}
                                            </code>
                                        </td>
                                        <td style={{ padding: '16px 20px', color: '#64748b', fontSize: '14px' }}>
                                            {block.time}
                                        </td>
                                        <td style={{ padding: '16px 20px', color: '#0f172a', fontWeight: 500 }}>
                                            {block.txCount}
                                        </td>
                                        <td style={{ padding: '16px 20px', color: '#64748b', fontSize: '14px' }}>
                                            {block.size} bytes
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Notice */}
                <p style={{
                    textAlign: 'center',
                    color: '#94a3b8',
                    fontSize: '13px',
                    marginTop: '24px'
                }}>
                    ⚠️ This is an experimental network. Block data shown is simulated for demonstration.
                </p>
            </div>
        </div>
    );
};

export default Explorer;
