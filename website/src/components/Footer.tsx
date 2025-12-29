import { Github, ExternalLink, Heart, Shield, FileText } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer style={{
            backgroundColor: '#0f172a',
            color: '#fff',
            padding: '60px 24px 30px',
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                {/* Main Footer Content */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '40px',
                    marginBottom: '48px'
                }}>
                    {/* Brand */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                            <img src="/logo.png" alt="Hashium" style={{ width: '40px', height: '40px' }} />
                            <span style={{ fontWeight: 800, fontSize: '24px' }}>Hashium</span>
                        </div>
                        <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: 1.7, marginBottom: '20px' }}>
                            A modern cryptocurrency built on Bitcoin's proven foundation with SegWit and Taproot enabled from genesis.
                        </p>
                        <div style={{ display: 'flex', gap: '12px' }}>
                            <a
                                href="https://github.com/Hylium-crypto/Hashium"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    color: '#94a3b8',
                                    transition: 'color 0.2s',
                                    padding: '8px',
                                    background: 'rgba(255,255,255,0.05)',
                                    borderRadius: '8px'
                                }}
                            >
                                <Github size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ fontWeight: 600, marginBottom: '20px', color: '#fff' }}>Quick Links</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {[
                                { name: 'Explorer', href: '#explorer' },
                                { name: 'Paper Wallet', href: '#paper-wallet-section' },
                                { name: 'Payment Request', href: '#payment-request' },
                                { name: 'Mining Calculator', href: '#mining-calculator' },
                                { name: 'Address Validator', href: '#address-validator' },
                            ].map(link => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    style={{ color: '#94a3b8', fontSize: '14px', textDecoration: 'none' }}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 style={{ fontWeight: 600, marginBottom: '20px', color: '#fff' }}>Resources</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <a
                                href="https://github.com/Hylium-crypto/Hashium/releases"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: '#94a3b8', fontSize: '14px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}
                            >
                                Download Wallet <ExternalLink size={12} />
                            </a>
                            <a
                                href="https://github.com/Hylium-crypto/Hashium"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: '#94a3b8', fontSize: '14px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}
                            >
                                GitHub Repository <ExternalLink size={12} />
                            </a>
                            <a
                                href="https://github.com/Hylium-crypto/Hashium/blob/main/README.md"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: '#94a3b8', fontSize: '14px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}
                            >
                                Documentation <ExternalLink size={12} />
                            </a>
                            <a
                                href="#roadmap"
                                style={{ color: '#94a3b8', fontSize: '14px', textDecoration: 'none' }}
                            >
                                Roadmap
                            </a>
                        </div>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 style={{ fontWeight: 600, marginBottom: '20px', color: '#fff' }}>Legal</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <a
                                href="https://github.com/Hylium-crypto/Hashium/blob/main/DISCLAIMER.md"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: '#94a3b8', fontSize: '14px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}
                            >
                                <FileText size={14} /> Disclaimer
                            </a>
                            <a
                                href="https://github.com/Hylium-crypto/Hashium/blob/main/COPYING"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: '#94a3b8', fontSize: '14px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}
                            >
                                <Shield size={14} /> MIT License
                            </a>
                        </div>

                        {/* Disclaimer Box */}
                        <div style={{
                            marginTop: '20px',
                            padding: '12px',
                            background: 'rgba(234, 179, 8, 0.1)',
                            borderRadius: '8px',
                            border: '1px solid rgba(234, 179, 8, 0.3)'
                        }}>
                            <p style={{ color: '#fbbf24', fontSize: '11px', lineHeight: 1.5, margin: 0 }}>
                                ⚠️ Experimental project. Not investment advice. Use at your own risk.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div style={{
                    height: '1px',
                    background: 'linear-gradient(90deg, transparent, #334155, transparent)',
                    marginBottom: '24px'
                }} />

                {/* Bottom Bar */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '16px'
                }}>
                    <p style={{ color: '#64748b', fontSize: '13px', margin: 0 }}>
                        © {currentYear} Hashium. Open source under MIT License.
                    </p>
                    <p style={{ color: '#64748b', fontSize: '13px', margin: 0, display: 'flex', alignItems: 'center', gap: '6px' }}>
                        Built with <Heart size={14} color="#ef4444" /> by the community
                    </p>
                </div>
            </div>

            {/* Responsive Styles */}
            <style>{`
                @media (max-width: 900px) {
                    footer > div > div:first-child {
                        grid-template-columns: repeat(2, 1fr) !important;
                    }
                }
                @media (max-width: 500px) {
                    footer > div > div:first-child {
                        grid-template-columns: 1fr !important;
                    }
                }
                footer a:hover {
                    color: #00d4ff !important;
                }
            `}</style>
        </footer>
    );
};

export default Footer;
