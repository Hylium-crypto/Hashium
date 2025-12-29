import { Github, Download, ArrowRight, Shield, Zap, Lock } from 'lucide-react';
import { Suspense, useState } from 'react';
import Scene3D from './Scene3D';

const Hero = () => {
    const [hoverButton, setHoverButton] = useState<string | null>(null);

    return (
        <section id="home" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            paddingTop: '80px',
            background: 'linear-gradient(180deg, #ffffff 0%, #f0f9ff 50%, #e0f2fe 100%)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background decoration */}
            <div style={{
                position: 'absolute',
                top: '10%',
                left: '-10%',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(0,212,255,0.1) 0%, transparent 70%)',
                borderRadius: '50%',
                pointerEvents: 'none'
            }} />
            <div style={{
                position: 'absolute',
                bottom: '10%',
                right: '-15%',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)',
                borderRadius: '50%',
                pointerEvents: 'none'
            }} />

            <div style={{
                maxWidth: '1400px',
                margin: '0 auto',
                padding: '40px 24px',
                display: 'grid',
                gridTemplateColumns: '1fr 1.3fr',
                gap: '40px',
                alignItems: 'center',
                position: 'relative',
                zIndex: 1
            }}>
                {/* Left Column - Text */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    {/* Badge */}
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '8px 16px',
                        background: 'rgba(0, 212, 255, 0.1)',
                        border: '1px solid rgba(0, 212, 255, 0.3)',
                        borderRadius: '100px',
                        width: 'fit-content'
                    }}>
                        <span style={{
                            width: '8px',
                            height: '8px',
                            background: '#22c55e',
                            borderRadius: '50%',
                            animation: 'pulse 2s infinite'
                        }} />
                        <span style={{
                            color: '#0891b2',
                            fontWeight: 600,
                            fontSize: '13px',
                            letterSpacing: '0.02em'
                        }}>
                            Network Active • v1.7.0
                        </span>
                    </div>

                    <h1 style={{
                        fontSize: 'clamp(32px, 4.5vw, 56px)',
                        fontWeight: 800,
                        color: '#0f172a',
                        lineHeight: 1.1,
                        letterSpacing: '-0.02em',
                        margin: 0
                    }}>
                        The Future of{' '}
                        <span style={{
                            background: 'linear-gradient(135deg, #00d4ff 0%, #0891b2 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>
                            Decentralized
                        </span>
                        {' '}Currency
                    </h1>

                    <p style={{
                        color: '#475569',
                        fontSize: '18px',
                        lineHeight: 1.7,
                        maxWidth: '500px',
                        margin: 0
                    }}>
                        Hashium is a modern cryptocurrency built on Bitcoin's battle-tested foundation,
                        with SegWit and Taproot enabled from genesis.
                    </p>

                    {/* CTA Buttons */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', paddingTop: '8px' }}>
                        <a
                            href="https://github.com/Hylium-crypto/Hashium/releases/latest"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                padding: '16px 32px',
                                background: hoverButton === 'download'
                                    ? 'linear-gradient(135deg, #00c4ed 0%, #0098b8 100%)'
                                    : 'linear-gradient(135deg, #00d4ff 0%, #00a3cc 100%)',
                                color: '#0f172a',
                                fontWeight: 600,
                                borderRadius: '14px',
                                border: 'none',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                cursor: 'pointer',
                                fontSize: '16px',
                                textDecoration: 'none',
                                transition: 'all 0.3s ease',
                                transform: hoverButton === 'download' ? 'translateY(-3px)' : 'none',
                                boxShadow: hoverButton === 'download'
                                    ? '0 12px 30px rgba(0, 212, 255, 0.35)'
                                    : '0 4px 15px rgba(0, 212, 255, 0.25)',
                            }}
                            onMouseEnter={() => setHoverButton('download')}
                            onMouseLeave={() => setHoverButton(null)}
                        >
                            <Download size={20} />
                            Download Wallet
                            <ArrowRight size={18} style={{
                                transition: 'transform 0.2s',
                                transform: hoverButton === 'download' ? 'translateX(4px)' : 'none'
                            }} />
                        </a>

                        <a
                            href="https://github.com/Hylium-crypto/Hashium"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                padding: '16px 32px',
                                border: '2px solid #e2e8f0',
                                backgroundColor: hoverButton === 'github' ? '#f8fafc' : '#ffffff',
                                color: '#0f172a',
                                fontWeight: 500,
                                borderRadius: '14px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                cursor: 'pointer',
                                fontSize: '16px',
                                textDecoration: 'none',
                                transition: 'all 0.3s ease',
                                transform: hoverButton === 'github' ? 'translateY(-3px)' : 'none',
                                boxShadow: hoverButton === 'github' ? '0 8px 20px rgba(0,0,0,0.08)' : 'none',
                            }}
                            onMouseEnter={() => setHoverButton('github')}
                            onMouseLeave={() => setHoverButton(null)}
                        >
                            <Github size={20} />
                            View Source
                        </a>
                    </div>

                    {/* Feature Pills */}
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '12px',
                        marginTop: '20px',
                    }}>
                        {[
                            { icon: Shield, text: 'MIT Licensed', color: '#22c55e' },
                            { icon: Zap, text: 'SegWit + Taproot', color: '#f59e0b' },
                            { icon: Lock, text: 'Proof of Work', color: '#8b5cf6' },
                        ].map((item, index) => (
                            <div
                                key={index}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    padding: '10px 16px',
                                    background: '#ffffff',
                                    borderRadius: '10px',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                                    border: '1px solid #f1f5f9'
                                }}
                            >
                                <item.icon size={16} color={item.color} />
                                <span style={{ fontSize: '13px', fontWeight: 500, color: '#475569' }}>
                                    {item.text}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Disclaimer */}
                    <p style={{
                        fontSize: '12px',
                        color: '#94a3b8',
                        marginTop: '8px',
                        padding: '12px 16px',
                        background: 'rgba(234, 179, 8, 0.08)',
                        borderRadius: '8px',
                        border: '1px solid rgba(234, 179, 8, 0.2)'
                    }}>
                        ⚠️ <strong>Experimental Project</strong> - This is a community-driven crypto project for learning purposes. Not financial advice.
                    </p>
                </div>

                {/* Right Column - 3D Model */}
                <div style={{ width: '100%', height: '600px', position: 'relative' }}>
                    <Suspense fallback={
                        <div style={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: 'radial-gradient(circle, rgba(0,212,255,0.1) 0%, transparent 70%)'
                        }}>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '16px'
                            }}>
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    border: '3px solid #e2e8f0',
                                    borderTop: '3px solid #00d4ff',
                                    borderRadius: '50%',
                                    animation: 'spin 1s linear infinite'
                                }} />
                                <span style={{ color: '#64748b', fontSize: '14px' }}>Loading 3D Model...</span>
                            </div>
                        </div>
                    }>
                        <Scene3D />
                    </Suspense>
                </div>
            </div>

            <style>{`
                @keyframes pulse {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.6; transform: scale(0.9); }
                }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @media (max-width: 900px) {
                    section#home > div > div:first-child { 
                        grid-template-columns: 1fr !important; 
                        text-align: center;
                        padding: 20px 0;
                    }
                    section#home h1 { font-size: 32px !important; }
                    section#home > div { grid-template-columns: 1fr !important; }
                    section#home > div > div:last-child { height: 350px !important; }
                }
            `}</style>
        </section>
    );
};

export default Hero;
