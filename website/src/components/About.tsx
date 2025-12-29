import { Code, Users, Shield, Heart, Github, ExternalLink } from 'lucide-react';

const About = () => {
    return (
        <section id="about" style={{
            padding: '80px 24px',
            background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)'
        }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <span style={{
                        display: 'inline-block',
                        padding: '8px 20px',
                        background: 'rgba(0, 212, 255, 0.1)',
                        borderRadius: '100px',
                        color: '#0891b2',
                        fontSize: '13px',
                        fontWeight: 600,
                        marginBottom: '16px'
                    }}>
                        About Hashium
                    </span>
                    <h2 style={{
                        fontSize: 'clamp(28px, 4vw, 42px)',
                        fontWeight: 800,
                        color: '#0f172a',
                        marginBottom: '16px',
                        letterSpacing: '-0.02em'
                    }}>
                        Built by the Community,<br />
                        <span style={{
                            background: 'linear-gradient(135deg, #00d4ff 0%, #0891b2 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>
                            For the Community
                        </span>
                    </h2>
                    <p style={{
                        color: '#64748b',
                        fontSize: '17px',
                        maxWidth: '600px',
                        margin: '0 auto',
                        lineHeight: 1.7
                    }}>
                        Hashium is an open-source cryptocurrency project focused on learning,
                        experimentation, and building a genuine decentralized network.
                    </p>
                </div>

                {/* Story Cards */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '24px',
                    marginBottom: '60px'
                }}>
                    {/* Our Mission */}
                    <div style={{
                        background: '#ffffff',
                        borderRadius: '20px',
                        padding: '32px',
                        border: '1px solid #e2e8f0',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.04)'
                    }}>
                        <div style={{
                            width: '50px',
                            height: '50px',
                            background: 'linear-gradient(135deg, #00d4ff 0%, #0891b2 100%)',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '20px'
                        }}>
                            <Code size={24} color="#fff" />
                        </div>
                        <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>
                            Our Mission
                        </h3>
                        <p style={{ color: '#64748b', fontSize: '15px', lineHeight: 1.7 }}>
                            To create a cryptocurrency that embodies the original vision of decentralized
                            digital money—transparent, accessible, and community-driven. We believe in
                            learning by doing and building in public.
                        </p>
                    </div>

                    {/* Technology */}
                    <div style={{
                        background: '#ffffff',
                        borderRadius: '20px',
                        padding: '32px',
                        border: '1px solid #e2e8f0',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.04)'
                    }}>
                        <div style={{
                            width: '50px',
                            height: '50px',
                            background: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '20px'
                        }}>
                            <Shield size={24} color="#fff" />
                        </div>
                        <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>
                            Built on Bitcoin
                        </h3>
                        <p style={{ color: '#64748b', fontSize: '15px', lineHeight: 1.7 }}>
                            Hashium is built on Bitcoin Core's battle-tested codebase with all modern
                            features enabled from genesis: SegWit, Taproot, and Schnorr signatures.
                            Security and reliability inherited from 15+ years of development.
                        </p>
                    </div>

                    {/* Community */}
                    <div style={{
                        background: '#ffffff',
                        borderRadius: '20px',
                        padding: '32px',
                        border: '1px solid #e2e8f0',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.04)'
                    }}>
                        <div style={{
                            width: '50px',
                            height: '50px',
                            background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '20px'
                        }}>
                            <Users size={24} color="#fff" />
                        </div>
                        <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>
                            Community First
                        </h3>
                        <p style={{ color: '#64748b', fontSize: '15px', lineHeight: 1.7 }}>
                            No pre-mine, no ICO, no VC funding. Just a fair launch where everyone starts
                            equal. Our growing community of miners, developers, and enthusiasts is what
                            makes Hashium valuable.
                        </p>
                    </div>

                    {/* Open Source */}
                    <div style={{
                        background: '#ffffff',
                        borderRadius: '20px',
                        padding: '32px',
                        border: '1px solid #e2e8f0',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.04)'
                    }}>
                        <div style={{
                            width: '50px',
                            height: '50px',
                            background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '20px'
                        }}>
                            <Heart size={24} color="#fff" />
                        </div>
                        <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>
                            100% Open Source
                        </h3>
                        <p style={{ color: '#64748b', fontSize: '15px', lineHeight: 1.7 }}>
                            Every line of code is public on GitHub under the MIT license. Anyone can
                            audit, contribute, fork, or learn from the codebase. Transparency is our
                            default mode.
                        </p>
                    </div>
                </div>

                {/* Stats/Facts */}
                <div style={{
                    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                    borderRadius: '24px',
                    padding: '48px',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '32px',
                    marginBottom: '60px'
                }}>
                    {[
                        { value: '0', label: 'Pre-mine', desc: 'Fair launch' },
                        { value: '10m', label: 'Block time', desc: 'Like Bitcoin' },
                        { value: '21M', label: 'Max supply', desc: 'HSM total' },
                        { value: 'MIT', label: 'License', desc: 'Open source' },
                    ].map((stat, index) => (
                        <div key={index} style={{ textAlign: 'center' }}>
                            <p style={{
                                fontSize: '36px',
                                fontWeight: 800,
                                color: '#00d4ff',
                                marginBottom: '4px'
                            }}>
                                {stat.value}
                            </p>
                            <p style={{ fontSize: '14px', fontWeight: 600, color: '#fff', marginBottom: '4px' }}>
                                {stat.label}
                            </p>
                            <p style={{ fontSize: '12px', color: '#64748b' }}>
                                {stat.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div style={{ textAlign: 'center' }}>
                    <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>
                        Want to contribute?
                    </h3>
                    <p style={{ color: '#64748b', fontSize: '16px', marginBottom: '24px' }}>
                        Hashium is always looking for contributors—developers, miners, designers, and community builders.
                    </p>
                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a
                            href="https://github.com/Hylium-crypto/Hashium"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '10px',
                                padding: '14px 28px',
                                background: '#0f172a',
                                color: '#fff',
                                borderRadius: '12px',
                                fontSize: '15px',
                                fontWeight: 600,
                                textDecoration: 'none',
                                transition: 'all 0.2s'
                            }}
                        >
                            <Github size={20} />
                            View on GitHub
                            <ExternalLink size={16} />
                        </a>
                        <a
                            href="https://github.com/Hylium-crypto/Hashium/issues"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '10px',
                                padding: '14px 28px',
                                background: '#ffffff',
                                color: '#0f172a',
                                border: '2px solid #e2e8f0',
                                borderRadius: '12px',
                                fontSize: '15px',
                                fontWeight: 500,
                                textDecoration: 'none',
                                transition: 'all 0.2s'
                            }}
                        >
                            Report an Issue
                        </a>
                    </div>
                </div>
            </div>

            {/* Responsive */}
            <style>{`
                @media (max-width: 800px) {
                    #about > div > div:nth-child(2) {
                        grid-template-columns: 1fr !important;
                    }
                    #about > div > div:nth-child(3) {
                        grid-template-columns: repeat(2, 1fr) !important;
                        padding: 32px 24px !important;
                    }
                }
                @media (max-width: 500px) {
                    #about > div > div:nth-child(3) {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default About;
