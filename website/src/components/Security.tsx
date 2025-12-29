import { Shield, Lock, Eye, CheckCircle, Server, Key, Fingerprint, AlertTriangle } from 'lucide-react';

const Security = () => {
    return (
        <section id="security" style={{
            padding: '100px 24px',
            background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)',
            color: '#fff',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Glow Effects */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '10%',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(0,212,255,0.15) 0%, transparent 70%)',
                borderRadius: '50%',
                pointerEvents: 'none'
            }} />
            <div style={{
                position: 'absolute',
                bottom: '10%',
                right: '5%',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(34,197,94,0.1) 0%, transparent 70%)',
                borderRadius: '50%',
                pointerEvents: 'none'
            }} />

            <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                {/* Hero Security Badge */}
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '16px 32px',
                        background: 'linear-gradient(135deg, rgba(34,197,94,0.2) 0%, rgba(22,163,74,0.2) 100%)',
                        border: '2px solid rgba(34,197,94,0.5)',
                        borderRadius: '100px',
                        marginBottom: '32px'
                    }}>
                        <Shield size={28} color="#22c55e" />
                        <span style={{
                            fontSize: '16px',
                            fontWeight: 700,
                            color: '#22c55e',
                            letterSpacing: '0.05em'
                        }}>
                            SECURITY FIRST
                        </span>
                        <CheckCircle size={20} color="#22c55e" />
                    </div>

                    <h2 style={{
                        fontSize: 'clamp(32px, 5vw, 52px)',
                        fontWeight: 800,
                        marginBottom: '20px',
                        letterSpacing: '-0.02em'
                    }}>
                        Bank-Grade Security,<br />
                        <span style={{
                            background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>
                            Zero Compromises
                        </span>
                    </h2>
                    <p style={{
                        color: '#94a3b8',
                        fontSize: '18px',
                        maxWidth: '700px',
                        margin: '0 auto',
                        lineHeight: 1.7
                    }}>
                        Built on Bitcoin's battle-tested codebase with 15+ years of security research.
                        Your funds are protected by military-grade cryptography.
                    </p>
                </div>

                {/* Security Features Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '24px',
                    marginBottom: '60px'
                }}>
                    {[
                        {
                            icon: Lock,
                            title: 'AES-256 Encryption',
                            desc: 'Your private keys are encrypted with the same standard used by governments and banks worldwide.',
                            color: '#00d4ff'
                        },
                        {
                            icon: Fingerprint,
                            title: 'Your Keys, Your Crypto',
                            desc: 'Non-custodial wallet. We never have access to your private keys. Only you control your funds.',
                            color: '#22c55e'
                        },
                        {
                            icon: Eye,
                            title: 'Open Source Audited',
                            desc: 'Every line of code is public on GitHub. Community-audited and transparent by design.',
                            color: '#8b5cf6'
                        },
                        {
                            icon: Server,
                            title: 'Decentralized Network',
                            desc: 'No central point of failure. The network is secured by distributed nodes worldwide.',
                            color: '#f59e0b'
                        },
                        {
                            icon: Key,
                            title: 'Schnorr Signatures',
                            desc: 'Advanced cryptographic signatures for enhanced privacy and smaller transaction sizes.',
                            color: '#ef4444'
                        },
                        {
                            icon: Shield,
                            title: 'Proof of Work',
                            desc: 'Same consensus mechanism as Bitcoin. Mathematically secure and time-proven.',
                            color: '#06b6d4'
                        }
                    ].map((feature, index) => (
                        <div
                            key={index}
                            style={{
                                background: 'rgba(255,255,255,0.03)',
                                borderRadius: '20px',
                                padding: '32px',
                                border: '1px solid rgba(255,255,255,0.08)',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                                e.currentTarget.style.transform = 'translateY(-4px)';
                                e.currentTarget.style.borderColor = feature.color + '40';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                            }}
                        >
                            <div style={{
                                width: '56px',
                                height: '56px',
                                background: `linear-gradient(135deg, ${feature.color}20 0%, ${feature.color}10 100%)`,
                                borderRadius: '14px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '20px',
                                border: `1px solid ${feature.color}30`
                            }}>
                                <feature.icon size={28} color={feature.color} />
                            </div>
                            <h3 style={{
                                fontSize: '18px',
                                fontWeight: 700,
                                marginBottom: '12px',
                                color: '#fff'
                            }}>
                                {feature.title}
                            </h3>
                            <p style={{
                                color: '#94a3b8',
                                fontSize: '14px',
                                lineHeight: 1.7
                            }}>
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Trust Badges */}
                <div style={{
                    background: 'rgba(34, 197, 94, 0.08)',
                    border: '1px solid rgba(34, 197, 94, 0.25)',
                    borderRadius: '20px',
                    padding: '40px',
                    textAlign: 'center',
                    marginBottom: '40px'
                }}>
                    <h3 style={{
                        fontSize: '24px',
                        fontWeight: 700,
                        color: '#22c55e',
                        marginBottom: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '12px'
                    }}>
                        <CheckCircle size={28} />
                        Security Verified
                    </h3>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '40px',
                        flexWrap: 'wrap'
                    }}>
                        {[
                            { value: '15+', label: 'Years of Bitcoin Code' },
                            { value: '0', label: 'Known Vulnerabilities' },
                            { value: '100%', label: 'Open Source' },
                            { value: '24/7', label: 'Network Uptime' },
                        ].map((stat, i) => (
                            <div key={i} style={{ textAlign: 'center' }}>
                                <p style={{
                                    fontSize: '32px',
                                    fontWeight: 800,
                                    color: '#fff',
                                    marginBottom: '4px'
                                }}>
                                    {stat.value}
                                </p>
                                <p style={{ fontSize: '13px', color: '#94a3b8' }}>
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Security Promise */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                    padding: '24px 32px',
                    background: 'rgba(0, 212, 255, 0.08)',
                    border: '1px solid rgba(0, 212, 255, 0.25)',
                    borderRadius: '16px'
                }}>
                    <AlertTriangle size={32} color="#00d4ff" />
                    <div>
                        <h4 style={{ fontSize: '16px', fontWeight: 600, color: '#fff', marginBottom: '4px' }}>
                            Our Security Promise
                        </h4>
                        <p style={{ color: '#94a3b8', fontSize: '14px', margin: 0 }}>
                            We use the same cryptographic standards trusted by major financial institutions.
                            Your private keys never leave your device—we can't access them even if we wanted to.
                        </p>
                    </div>
                </div>
            </div>

            {/* Responsive */}
            <style>{`
                @media (max-width: 900px) {
                    #security > div > div:nth-child(2) {
                        grid-template-columns: repeat(2, 1fr) !important;
                    }
                }
                @media (max-width: 600px) {
                    #security > div > div:nth-child(2) {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Security;
