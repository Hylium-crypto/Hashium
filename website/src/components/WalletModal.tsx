import { X, Download, Terminal, Wallet } from 'lucide-react';

interface WalletModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const WalletModal = ({ isOpen, onClose }: WalletModalProps) => {
    if (!isOpen) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 100,
            backdropFilter: 'blur(4px)',
        }} onClick={onClose}>
            <div style={{
                backgroundColor: '#ffffff',
                borderRadius: '24px',
                padding: '32px',
                maxWidth: '480px',
                width: '90%',
                position: 'relative',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            }} onClick={(e) => e.stopPropagation()}>
                {/* Close Button */}
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '16px',
                        right: '16px',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: '#64748b',
                    }}
                >
                    <X size={24} />
                </button>

                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                    <div style={{
                        width: '64px',
                        height: '64px',
                        borderRadius: '16px',
                        background: 'linear-gradient(135deg, #00d4ff 0%, #0891b2 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 16px',
                    }}>
                        <Wallet size={32} color="#ffffff" />
                    </div>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#0f172a', margin: 0 }}>
                        Hashium Wallet
                    </h2>
                    <p style={{ color: '#64748b', marginTop: '8px', fontSize: '14px' }}>
                        Download and run the Hashium wallet
                    </p>
                </div>

                {/* Options */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {/* Download Option */}
                    <a
                        href="https://github.com/Hylium-crypto/Hashium/releases/latest"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '16px',
                            padding: '16px',
                            borderRadius: '12px',
                            border: '1px solid #e2e8f0',
                            textDecoration: 'none',
                            color: '#0f172a',
                            transition: 'all 0.2s',
                            backgroundColor: '#f8fafc',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = '#00d4ff';
                            e.currentTarget.style.backgroundColor = '#f0fdff';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = '#e2e8f0';
                            e.currentTarget.style.backgroundColor = '#f8fafc';
                        }}
                    >
                        <div style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '12px',
                            backgroundColor: '#00d4ff20',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <Download size={24} color="#0891b2" />
                        </div>
                        <div>
                            <p style={{ fontWeight: 600, margin: 0 }}>Download Wallet</p>
                            <p style={{ fontSize: '13px', color: '#64748b', margin: '4px 0 0' }}>
                                macOS & Linux available
                            </p>
                        </div>
                    </a>

                    {/* CLI Option */}
                    <div style={{
                        padding: '16px',
                        borderRadius: '12px',
                        border: '1px solid #e2e8f0',
                        backgroundColor: '#f8fafc',
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
                            <div style={{
                                width: '48px',
                                height: '48px',
                                borderRadius: '12px',
                                backgroundColor: '#0f172a20',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <Terminal size={24} color="#0f172a" />
                            </div>
                            <div>
                                <p style={{ fontWeight: 600, margin: 0, color: '#0f172a' }}>Quick Start</p>
                                <p style={{ fontSize: '13px', color: '#64748b', margin: '4px 0 0' }}>
                                    Run these commands
                                </p>
                            </div>
                        </div>
                        <pre style={{
                            backgroundColor: '#0f172a',
                            color: '#e2e8f0',
                            padding: '12px',
                            borderRadius: '8px',
                            fontSize: '12px',
                            overflow: 'auto',
                            margin: 0,
                        }}>
                            {`# Extract and run
tar -xzf Hashium-*.tar.gz
cd Hashium-*
./hashium-qt`}
                        </pre>
                    </div>
                </div>

                {/* Footer Note */}
                <p style={{
                    textAlign: 'center',
                    fontSize: '12px',
                    color: '#94a3b8',
                    marginTop: '20px',
                    marginBottom: 0,
                }}>
                    Hashium uses its own blockchain. MetaMask not required.
                </p>
            </div>
        </div>
    );
};

export default WalletModal;
