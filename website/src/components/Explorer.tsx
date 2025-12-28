import { useState, useEffect } from 'react';
import { Blocks, Clock, Hash, AlertTriangle } from 'lucide-react';

const Explorer = () => {
    const [stats, setStats] = useState({ blockHeight: 0, difficulty: 0, hashrate: 0 });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/stats')
            .then(res => res.json())
            .then(data => {
                setStats({
                    blockHeight: data.blockHeight || 0,
                    difficulty: data.difficulty || 0,
                    hashrate: data.networkHashrate || 0
                });
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    return (
        <div style={{
            minHeight: '60vh',
            background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
            paddingTop: '60px',
            paddingBottom: '60px'
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                    <h2 style={{
                        fontSize: '32px',
                        fontWeight: 700,
                        color: '#0f172a',
                        marginBottom: '12px'
                    }}>
                        Block Explorer
                    </h2>
                    <p style={{ color: '#64748b', fontSize: '16px' }}>
                        Live network statistics
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
                            {loading ? '...' : stats.blockHeight.toLocaleString()}
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
                            {loading ? '...' : stats.difficulty}
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
                            {loading ? '...' : `${(stats.hashrate / 1000).toFixed(1)} KH/s`}
                        </p>
                        <p style={{ color: '#64748b', fontSize: '14px' }}>Network Hashrate</p>
                    </div>
                </div>

                {/* Coming Soon Notice */}
                <div style={{
                    background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
                    borderRadius: '20px',
                    padding: '40px',
                    textAlign: 'center',
                    border: '1px solid #fcd34d'
                }}>
                    <AlertTriangle size={48} color="#d97706" style={{ marginBottom: '16px' }} />
                    <h3 style={{
                        fontSize: '24px',
                        fontWeight: 600,
                        color: '#92400e',
                        marginBottom: '12px'
                    }}>
                        Full Block Explorer Coming Soon
                    </h3>
                    <p style={{ color: '#a16207', fontSize: '16px', maxWidth: '500px', margin: '0 auto' }}>
                        A complete block explorer with transaction history, address lookup, and real-time
                        block data will be available in a future update.
                    </p>
                </div>

                {/* Notice */}
                <p style={{
                    textAlign: 'center',
                    color: '#94a3b8',
                    fontSize: '13px',
                    marginTop: '24px'
                }}>
                    ⚠️ This is an experimental network. Statistics are fetched from the API.
                </p>
            </div>
        </div>
    );
};

export default Explorer;
