import { useState, useEffect, useMemo } from 'react';
import { Cpu, Zap, Clock, TrendingUp, Calculator } from 'lucide-react';

// Hashium network constants
const BLOCK_REWARD = 50; // HSM per block
const BLOCK_TIME = 600; // 10 minutes in seconds
const BLOCKS_PER_DAY = (24 * 60 * 60) / BLOCK_TIME; // 144 blocks

const MiningCalculator = () => {
    const [hashrate, setHashrate] = useState('1000'); // KH/s
    const [networkHashrate, setNetworkHashrate] = useState(50); // KH/s (from network)
    const [difficulty, setDifficulty] = useState(0.001);

    // Fetch network stats
    useEffect(() => {
        fetch('/api/stats')
            .then(res => res.json())
            .then(data => {
                if (data.networkHashrate) setNetworkHashrate(data.networkHashrate);
                if (data.difficulty) setDifficulty(data.difficulty);
            })
            .catch(() => { });
    }, []);

    // Calculate mining rewards using useMemo (not useEffect+setState)
    const results = useMemo(() => {
        const userHashrateKH = parseFloat(hashrate) || 0;
        const networkKH = networkHashrate || 1;

        // Your share of the network
        const shareOfNetwork = userHashrateKH / (networkKH + userHashrateKH);

        // Blocks you'd mine per day (on average)
        const userBlocksPerDay = BLOCKS_PER_DAY * shareOfNetwork;

        // HSM rewards
        const dailyHSM = userBlocksPerDay * BLOCK_REWARD;
        const weeklyHSM = dailyHSM * 7;
        const monthlyHSM = dailyHSM * 30;

        return {
            dailyHSM: parseFloat(dailyHSM.toFixed(4)),
            weeklyHSM: parseFloat(weeklyHSM.toFixed(4)),
            monthlyHSM: parseFloat(monthlyHSM.toFixed(4)),
            blocksPerDay: parseFloat(userBlocksPerDay.toFixed(4))
        };
    }, [hashrate, networkHashrate]);

    return (
        <div style={{
            minHeight: '70vh',
            background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)',
            padding: '60px 24px',
            color: '#fff'
        }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <h2 style={{
                        fontSize: '36px',
                        fontWeight: 700,
                        marginBottom: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '12px'
                    }}>
                        <Calculator size={40} color="#00d4ff" />
                        Mining Calculator
                    </h2>
                    <p style={{ color: '#94a3b8', fontSize: '16px' }}>
                        Estimate your Hashium mining rewards
                    </p>
                </div>

                {/* Network Stats */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '16px',
                    marginBottom: '32px'
                }}>
                    <div style={{
                        background: 'rgba(0, 212, 255, 0.1)',
                        borderRadius: '12px',
                        padding: '16px',
                        textAlign: 'center',
                        border: '1px solid rgba(0, 212, 255, 0.2)'
                    }}>
                        <Zap size={24} color="#00d4ff" style={{ marginBottom: '8px' }} />
                        <p style={{ fontSize: '20px', fontWeight: 600, color: '#00d4ff' }}>
                            {networkHashrate.toLocaleString()} KH/s
                        </p>
                        <p style={{ fontSize: '12px', color: '#94a3b8' }}>Network Hashrate</p>
                    </div>
                    <div style={{
                        background: 'rgba(0, 212, 255, 0.1)',
                        borderRadius: '12px',
                        padding: '16px',
                        textAlign: 'center',
                        border: '1px solid rgba(0, 212, 255, 0.2)'
                    }}>
                        <TrendingUp size={24} color="#00d4ff" style={{ marginBottom: '8px' }} />
                        <p style={{ fontSize: '20px', fontWeight: 600, color: '#00d4ff' }}>
                            {difficulty}
                        </p>
                        <p style={{ fontSize: '12px', color: '#94a3b8' }}>Difficulty</p>
                    </div>
                    <div style={{
                        background: 'rgba(0, 212, 255, 0.1)',
                        borderRadius: '12px',
                        padding: '16px',
                        textAlign: 'center',
                        border: '1px solid rgba(0, 212, 255, 0.2)'
                    }}>
                        <Clock size={24} color="#00d4ff" style={{ marginBottom: '8px' }} />
                        <p style={{ fontSize: '20px', fontWeight: 600, color: '#00d4ff' }}>
                            {BLOCK_REWARD} HSM
                        </p>
                        <p style={{ fontSize: '12px', color: '#94a3b8' }}>Block Reward</p>
                    </div>
                </div>

                {/* Calculator Input */}
                <div style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '20px',
                    padding: '32px',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                    <div style={{ marginBottom: '24px' }}>
                        <label style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            marginBottom: '12px',
                            fontWeight: 600,
                            fontSize: '14px',
                            color: '#e2e8f0'
                        }}>
                            <Cpu size={18} color="#00d4ff" />
                            Your Hashrate (KH/s)
                        </label>
                        <input
                            type="number"
                            value={hashrate}
                            onChange={(e) => setHashrate(e.target.value)}
                            placeholder="Enter your hashrate"
                            style={{
                                width: '100%',
                                padding: '16px 20px',
                                background: 'rgba(0, 0, 0, 0.3)',
                                border: '2px solid rgba(0, 212, 255, 0.3)',
                                borderRadius: '12px',
                                fontSize: '24px',
                                fontWeight: 600,
                                color: '#fff',
                                outline: 'none',
                                boxSizing: 'border-box'
                            }}
                        />
                        <p style={{ fontSize: '12px', color: '#64748b', marginTop: '8px' }}>
                            💡 Typical CPU: 50-500 KH/s | GPU: 1,000-50,000 KH/s
                        </p>
                    </div>

                    {/* Quick Presets */}
                    <div style={{
                        display: 'flex',
                        gap: '8px',
                        flexWrap: 'wrap',
                        marginBottom: '24px'
                    }}>
                        {[100, 500, 1000, 5000, 10000].map(preset => (
                            <button
                                key={preset}
                                onClick={() => setHashrate(preset.toString())}
                                style={{
                                    padding: '8px 16px',
                                    background: hashrate === preset.toString()
                                        ? '#00d4ff'
                                        : 'rgba(255, 255, 255, 0.1)',
                                    color: hashrate === preset.toString() ? '#0f172a' : '#fff',
                                    border: 'none',
                                    borderRadius: '8px',
                                    fontSize: '13px',
                                    fontWeight: 600,
                                    cursor: 'pointer'
                                }}
                            >
                                {preset >= 1000 ? `${preset / 1000}M` : preset} KH/s
                            </button>
                        ))}
                    </div>
                </div>

                {/* Results */}
                <div style={{
                    marginTop: '32px',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '16px'
                }}>
                    <div style={{
                        background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.2) 0%, rgba(0, 163, 204, 0.2) 100%)',
                        borderRadius: '16px',
                        padding: '24px',
                        textAlign: 'center',
                        border: '1px solid rgba(0, 212, 255, 0.3)'
                    }}>
                        <p style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '8px' }}>
                            Daily Earnings
                        </p>
                        <p style={{
                            fontSize: '32px',
                            fontWeight: 700,
                            color: '#00d4ff',
                            marginBottom: '4px'
                        }}>
                            {results.dailyHSM} HSM
                        </p>
                        <p style={{ fontSize: '12px', color: '#64748b' }}>
                            ~{results.blocksPerDay} blocks/day
                        </p>
                    </div>

                    <div style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        borderRadius: '16px',
                        padding: '24px',
                        textAlign: 'center',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}>
                        <p style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '8px' }}>
                            Weekly Earnings
                        </p>
                        <p style={{
                            fontSize: '32px',
                            fontWeight: 700,
                            color: '#fff'
                        }}>
                            {results.weeklyHSM} HSM
                        </p>
                    </div>

                    <div style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        borderRadius: '16px',
                        padding: '24px',
                        textAlign: 'center',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        gridColumn: 'span 2'
                    }}>
                        <p style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '8px' }}>
                            Monthly Earnings (30 days)
                        </p>
                        <p style={{
                            fontSize: '40px',
                            fontWeight: 700,
                            color: '#22c55e'
                        }}>
                            {results.monthlyHSM} HSM
                        </p>
                    </div>
                </div>

                {/* Disclaimer */}
                <p style={{
                    textAlign: 'center',
                    color: '#64748b',
                    fontSize: '12px',
                    marginTop: '24px'
                }}>
                    ⚠️ These are estimates based on current network conditions.
                    Actual results may vary due to luck, network changes, and difficulty adjustments.
                </p>
            </div>
        </div>
    );
};

export default MiningCalculator;
