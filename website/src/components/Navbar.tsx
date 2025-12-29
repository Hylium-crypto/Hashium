import { Menu, X, Download } from 'lucide-react';
import { useState, useEffect } from 'react';

const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Explorer', href: '#explorer' },
    { name: 'Wallet', href: '#paper-wallet-section' },
    { name: 'Mining', href: '#mining-calculator' },
    { name: 'Roadmap', href: '#roadmap' }
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll for navbar background
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when clicking a link
    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <>
            <nav style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.98)' : '#ffffff',
                borderBottom: scrolled ? '1px solid #e2e8f0' : '1px solid transparent',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease',
                boxShadow: scrolled ? '0 2px 10px rgba(0,0,0,0.05)' : 'none',
            }}>
                <div style={{
                    maxWidth: '1280px',
                    margin: '0 auto',
                    padding: '14px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                    {/* Logo */}
                    <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
                        <img
                            src="/logo.png"
                            alt="Hashium Logo"
                            style={{ width: '38px', height: '38px', objectFit: 'contain' }}
                        />
                        <span style={{
                            color: '#0f172a',
                            fontWeight: 800,
                            fontSize: '22px',
                            letterSpacing: '-0.5px'
                        }}>
                            Hashium
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="desktop-nav" style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                    }}>
                        {navLinks.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                style={{
                                    color: '#475569',
                                    fontSize: '14px',
                                    fontWeight: 500,
                                    textDecoration: 'none',
                                    padding: '8px 14px',
                                    borderRadius: '8px',
                                    transition: 'all 0.2s'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = '#f1f5f9';
                                    e.currentTarget.style.color = '#0f172a';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                    e.currentTarget.style.color = '#475569';
                                }}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {/* Download Button - Desktop */}
                    <a
                        href="https://github.com/Hylium-crypto/Hashium/releases"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="download-btn-desktop"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '10px 20px',
                            borderRadius: '10px',
                            background: 'linear-gradient(135deg, #00d4ff 0%, #00a3cc 100%)',
                            color: '#0f172a',
                            fontSize: '14px',
                            fontWeight: 600,
                            textDecoration: 'none',
                            boxShadow: '0 2px 8px rgba(0, 212, 255, 0.3)',
                            transition: 'all 0.2s',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 212, 255, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 212, 255, 0.3)';
                        }}
                    >
                        <Download size={16} />
                        Download
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        className="mobile-menu-btn"
                        style={{
                            color: '#0f172a',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '8px',
                            display: 'none'
                        }}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                {isOpen && (
                    <div
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0,0,0,0.5)',
                            zIndex: 999
                        }}
                        onClick={() => setIsOpen(false)}
                    />
                )}

                {/* Mobile Menu */}
                <div
                    className="mobile-menu"
                    style={{
                        position: 'fixed',
                        top: 0,
                        right: isOpen ? 0 : '-300px',
                        width: '280px',
                        height: '100vh',
                        backgroundColor: '#ffffff',
                        boxShadow: '-4px 0 20px rgba(0,0,0,0.15)',
                        transition: 'right 0.3s ease',
                        zIndex: 1001,
                        padding: '24px',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    {/* Mobile Menu Header */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '32px',
                        paddingBottom: '20px',
                        borderBottom: '1px solid #e2e8f0'
                    }}>
                        <span style={{ fontWeight: 700, fontSize: '18px', color: '#0f172a' }}>Menu</span>
                        <button
                            onClick={() => setIsOpen(false)}
                            style={{
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                padding: '4px'
                            }}
                        >
                            <X size={24} color="#0f172a" />
                        </button>
                    </div>

                    {/* Mobile Menu Links */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
                        {navLinks.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={handleLinkClick}
                                style={{
                                    color: '#475569',
                                    fontSize: '16px',
                                    fontWeight: 500,
                                    textDecoration: 'none',
                                    padding: '14px 16px',
                                    borderRadius: '10px',
                                    transition: 'all 0.2s'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = '#f1f5f9';
                                    e.currentTarget.style.color = '#0f172a';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                    e.currentTarget.style.color = '#475569';
                                }}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Download Button */}
                    <a
                        href="https://github.com/Hylium-crypto/Hashium/releases"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '10px',
                            padding: '16px',
                            borderRadius: '12px',
                            background: 'linear-gradient(135deg, #00d4ff 0%, #00a3cc 100%)',
                            color: '#0f172a',
                            fontSize: '16px',
                            fontWeight: 600,
                            textDecoration: 'none',
                            marginTop: 'auto'
                        }}
                    >
                        <Download size={20} />
                        Download Wallet
                    </a>
                </div>
            </nav>

            {/* Responsive Styles */}
            <style>{`
                @media (max-width: 900px) {
                    .desktop-nav {
                        display: none !important;
                    }
                    .download-btn-desktop {
                        display: none !important;
                    }
                    .mobile-menu-btn {
                        display: block !important;
                    }
                }
            `}</style>
        </>
    );
};

export default Navbar;
