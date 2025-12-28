import { Github, Download } from 'lucide-react';
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
            background: 'linear-gradient(180deg, #ffffff 0%, #f0f9ff 100%)',
        }}>
            <div style={{
                maxWidth: '1400px',
                margin: '0 auto',
                padding: '40px 24px',
                display: 'grid',
                gridTemplateColumns: '1fr 1.5fr',
                gap: '24px',
                alignItems: 'center',
            }}>
                {/* Left Column - Text */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <p style={{
                        color: '#0891b2',
                        fontWeight: 600,
                        letterSpacing: '0.15em',
                        fontSize: '13px',
                        textTransform: 'uppercase',
                    }}>
                        HASHIUM CRYPTOCURRENCY
                    </p>

                    <h1 style={{
                        fontSize: 'clamp(28px, 4vw, 48px)',
                        fontWeight: 800,
                        color: '#0f172a',
                        lineHeight: 1.15,
                    }}>
                        Fast, Secure, and{' '}
                        <span style={{
                            background: 'linear-gradient(135deg, #00d4ff 0%, #0891b2 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>
                            Decentralized
                        </span>
                    </h1>

                    <p style={{
                        color: '#64748b',
                        fontSize: '17px',
                        lineHeight: 1.7,
                    }}>
                        Hashium is an experimental open-source cryptocurrency project.
                        Built on Bitcoin Core, it's a learning project for blockchain technology.
                        ⚠️ Early stage - not an investment.
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', paddingTop: '12px' }}>
                        <a
                            href="https://github.com/Hylium-crypto/Hashium/releases/latest"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                padding: '14px 28px',
                                backgroundColor: hoverButton === 'download' ? '#00c4ed' : '#00d4ff',
                                color: '#0f172a',
                                fontWeight: 600,
                                borderRadius: '12px',
                                border: 'none',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                cursor: 'pointer',
                                fontSize: '15px',
                                textDecoration: 'none',
                                transition: 'all 0.2s',
                                transform: hoverButton === 'download' ? 'translateY(-2px)' : 'none',
                                boxShadow: hoverButton === 'download' ? '0 8px 20px rgba(0, 212, 255, 0.3)' : 'none',
                            }}
                            onMouseEnter={() => setHoverButton('download')}
                            onMouseLeave={() => setHoverButton(null)}
                        >
                            <Download size={18} /> Download Wallet
                        </a>

                        <a
                            href="https://github.com/Hylium-crypto/Hashium"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                padding: '14px 28px',
                                border: '2px solid #e2e8f0',
                                backgroundColor: hoverButton === 'github' ? '#f8fafc' : '#ffffff',
                                color: '#0f172a',
                                fontWeight: 500,
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                cursor: 'pointer',
                                fontSize: '15px',
                                textDecoration: 'none',
                                transition: 'all 0.2s',
                                transform: hoverButton === 'github' ? 'translateY(-2px)' : 'none',
                            }}
                            onMouseEnter={() => setHoverButton('github')}
                            onMouseLeave={() => setHoverButton(null)}
                        >
                            <Github size={18} /> View on GitHub
                        </a>
                    </div>

                    {/* Trust indicators */}
                    <div style={{
                        display: 'flex',
                        gap: '24px',
                        marginTop: '16px',
                        paddingTop: '16px',
                        borderTop: '1px solid #e2e8f0',
                    }}>
                        <div style={{ textAlign: 'center' }}>
                            <p style={{ fontSize: '24px', fontWeight: 700, color: '#0f172a' }}>100%</p>
                            <p style={{ fontSize: '12px', color: '#64748b' }}>Open Source</p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <p style={{ fontSize: '24px', fontWeight: 700, color: '#0f172a' }}>MIT</p>
                            <p style={{ fontSize: '12px', color: '#64748b' }}>Licensed</p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <p style={{ fontSize: '24px', fontWeight: 700, color: '#0f172a' }}>PoW</p>
                            <p style={{ fontSize: '12px', color: '#64748b' }}>Consensus</p>
                        </div>
                    </div>
                </div>

                {/* Right Column - 3D Model */}
                <div style={{ width: '100%', height: '650px', position: 'relative' }}>
                    <Suspense fallback={
                        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0891b2' }}>
                            Loading...
                        </div>
                    }>
                        <Scene3D />
                    </Suspense>
                </div>
            </div>

            <style>{`
                @media (max-width: 900px) {
                    section > div { grid-template-columns: 1fr !important; text-align: center; }
                }
            `}</style>
        </section>
    );
};

export default Hero;

