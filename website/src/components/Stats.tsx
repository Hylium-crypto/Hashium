import { useEffect, useState, useRef } from 'react';
import { getStats } from '../services/api';
import type { NetworkStats } from '../services/api';

// Animated counter hook
const useAnimatedCounter = (end: number, duration: number = 2000) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);

    useEffect(() => {
        const startTime = Date.now();
        const startValue = countRef.current;

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
            const current = Math.round(startValue + (end - startValue) * eased);
            setCount(current);
            countRef.current = current;

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [end, duration]);

    return count;
};

// Mock data for demo - HONEST values for experimental network
const MOCK_STATS: NetworkStats = {
    blockHeight: 1300,
    difficulty: 0.001,
    chain: 'mainnet',
    networkHashrate: 50000, // 50 KH/s - small network
    connections: 2,
    lastUpdated: new Date().toISOString(),
};

const StatCard = ({ value, label, suffix = '' }: { value: number; label: string; suffix?: string }) => {
    const animatedValue = useAnimatedCounter(value);

    return (
        <div style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%)',
            borderRadius: '20px',
            padding: '32px',
            textAlign: 'center',
            border: '1px solid #e2e8f0',
            boxShadow: '0 4px 20px rgba(0, 212, 255, 0.08)',
            transition: 'transform 0.3s, box-shadow 0.3s',
            cursor: 'default',
        }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 212, 255, 0.15)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 212, 255, 0.08)';
            }}>
            <p style={{
                fontSize: '40px',
                fontWeight: 700,
                background: 'linear-gradient(135deg, #00d4ff 0%, #0891b2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
            }}>
                {animatedValue.toLocaleString()}{suffix}
            </p>
            <p style={{ color: '#64748b', fontSize: '14px', marginTop: '8px', fontWeight: 500 }}>{label}</p>
        </div>
    );
};

const Stats = () => {
    const [stats, setStats] = useState<NetworkStats | null>(null);
    const [isLive, setIsLive] = useState(false);

    useEffect(() => {
        const fetchStats = async () => {
            const { data } = await getStats();
            if (data && data.blockHeight > 0) {
                setStats(data);
                setIsLive(true);
            } else {
                // Use mock data for demo
                setStats(MOCK_STATS);
                setIsLive(false);
            }
        };
        fetchStats();
        const interval = setInterval(fetchStats, 30000);
        return () => clearInterval(interval);
    }, []);

    const displayStats = stats || MOCK_STATS;

    const items = [
        { label: 'Block Height', value: displayStats.blockHeight, suffix: '' },
        { label: 'Network Hashrate', value: Math.round(displayStats.networkHashrate / 1000000), suffix: ' MH/s' },
        { label: 'Difficulty', value: Math.round(displayStats.difficulty * 100) / 100, suffix: '' },
        { label: 'Active Nodes', value: displayStats.connections, suffix: '' },
    ];

    return (
        <section id="stats" style={{ padding: '100px 24px', background: '#f8fafc' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                    <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '8px 16px',
                        background: isLive ? 'rgba(16, 185, 129, 0.1)' : 'rgba(0, 212, 255, 0.1)',
                        borderRadius: '20px',
                        fontSize: '13px',
                        fontWeight: 600,
                        color: isLive ? '#10b981' : '#0891b2',
                    }}>
                        <span style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            background: isLive ? '#10b981' : '#0891b2',
                            animation: 'pulse 2s infinite',
                        }} />
                        {isLive ? 'LIVE DATA' : 'DEMO DATA'}
                    </span>
                </div>
                <h2 style={{ textAlign: 'center', fontSize: '36px', fontWeight: 700, color: '#0f172a', marginBottom: '48px' }}>
                    Network Statistics
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
                    {items.map((item, i) => (
                        <StatCard key={i} value={item.value} label={item.label} suffix={item.suffix} />
                    ))}
                </div>
            </div>
            <style>{`
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.5; }
                }
                @media (max-width: 768px) {
                    section > div > div:last-child { grid-template-columns: repeat(2, 1fr) !important; }
                }
            `}</style>
        </section>
    );
};

export default Stats;

