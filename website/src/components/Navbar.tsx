import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import WalletModal from './WalletModal';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);

    return (
        <>
            <nav style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 50,
                backgroundColor: '#ffffff',
                borderBottom: '1px solid #e2e8f0',
            }}>
                <div style={{
                    maxWidth: '1280px',
                    margin: '0 auto',
                    padding: '16px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                    {/* Logo */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <img
                            src="/logo.png"
                            alt="Hashium Logo"
                            style={{ width: '40px', height: '40px', objectFit: 'contain' }}
                        />
                        <span style={{ color: '#0f172a', fontWeight: 700, fontSize: '22px' }}>Hashium</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }} className="hidden md:flex">
                        {['Ecosystem', 'Technology', 'Roadmap', 'Stats'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                style={{ color: '#475569', fontSize: '15px', fontWeight: 500 }}
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    {/* Connect Wallet Button */}
                    <button
                        onClick={() => setIsWalletModalOpen(true)}
                        style={{
                            padding: '12px 24px',
                            borderRadius: '12px',
                            backgroundColor: '#00d4ff',
                            color: '#0f172a',
                            fontSize: '14px',
                            fontWeight: 600,
                            cursor: 'pointer',
                            border: 'none',
                            transition: 'all 0.2s',
                        }}
                        className="hidden md:block"
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#00c4ed';
                            e.currentTarget.style.transform = 'translateY(-1px)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = '#00d4ff';
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                    >
                        Connect Wallet
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        style={{ color: '#0f172a', background: 'none', border: 'none', cursor: 'pointer' }}
                        className="md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div style={{
                        padding: '16px 24px',
                        borderTop: '1px solid #e2e8f0',
                        backgroundColor: '#ffffff',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px',
                    }} className="md:hidden">
                        {['Ecosystem', 'Technology', 'Roadmap', 'Stats'].map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} style={{ color: '#475569' }}>{item}</a>
                        ))}
                        <button
                            onClick={() => {
                                setIsWalletModalOpen(true);
                                setIsOpen(false);
                            }}
                            style={{
                                marginTop: '8px',
                                padding: '12px 24px',
                                borderRadius: '12px',
                                backgroundColor: '#00d4ff',
                                color: '#0f172a',
                                fontSize: '14px',
                                fontWeight: 600,
                                border: 'none',
                                cursor: 'pointer',
                            }}
                        >
                            Connect Wallet
                        </button>
                    </div>
                )}
            </nav>

            {/* Wallet Modal */}
            <WalletModal
                isOpen={isWalletModalOpen}
                onClose={() => setIsWalletModalOpen(false)}
            />
        </>
    );
};

export default Navbar;
