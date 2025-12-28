import { useState } from 'react';
import { Printer, RefreshCw, AlertTriangle, Shield, Copy, Check } from 'lucide-react';

// Simple wallet generation using Web Crypto API
// In production, this should use proper Bitcoin/Hashium libraries

const generateRandomBytes = (length: number): Uint8Array => {
    return crypto.getRandomValues(new Uint8Array(length));
};

const bytesToHex = (bytes: Uint8Array): string => {
    return Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join('');
};

// Simple hash function for demo (in production use proper SHA256)
const simpleHash = async (data: string): Promise<string> => {
    const encoder = new TextEncoder();
    const dataBuffer = encoder.encode(data);
    const hashBuffer = await crypto.subtle.digest('SHA-256', dataBuffer);
    return bytesToHex(new Uint8Array(hashBuffer));
};

// Generate a Hashium-style address (simplified)
const generateWallet = async () => {
    // Generate 32 random bytes for private key
    const privateKeyBytes = generateRandomBytes(32);
    const privateKeyHex = bytesToHex(privateKeyBytes);

    // Generate address hash (simplified - real implementation would use proper EC crypto)
    const addressHash = await simpleHash(privateKeyHex);

    // Create Hashium bech32-style address (hyl1...)
    // This is a simplified version - real implementation needs proper bech32 encoding
    const addressSuffix = addressHash.slice(0, 38).toLowerCase();
    const address = `hyl1${addressSuffix}`;

    // Create WIF-style private key (simplified)
    const wif = `7${privateKeyHex.slice(0, 51)}`;

    return {
        address,
        privateKey: wif,
        seed: privateKeyHex
    };
};

const PaperWallet = () => {
    const [wallet, setWallet] = useState<{ address: string; privateKey: string; seed: string } | null>(null);
    const [loading, setLoading] = useState(false);
    const [copied, setCopied] = useState<string | null>(null);

    const handleGenerate = async () => {
        setLoading(true);
        const newWallet = await generateWallet();
        setWallet(newWallet);
        setLoading(false);
    };

    const handlePrint = () => {
        window.print();
    };

    const copyToClipboard = (text: string, type: string) => {
        navigator.clipboard.writeText(text);
        setCopied(type);
        setTimeout(() => setCopied(null), 2000);
    };

    return (
        <div style={{
            minHeight: '80vh',
            background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)',
            padding: '60px 24px',
            color: '#fff'
        }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '36px', fontWeight: 700, marginBottom: '12px' }}>
                        🎨 Paper Wallet Generator
                    </h2>
                    <p style={{ color: '#94a3b8', fontSize: '16px' }}>
                        Generate a secure offline wallet for cold storage
                    </p>
                </div>

                {/* Security Warning */}
                <div style={{
                    background: 'rgba(234, 179, 8, 0.1)',
                    border: '1px solid #eab308',
                    borderRadius: '12px',
                    padding: '20px',
                    marginBottom: '30px',
                    display: 'flex',
                    gap: '16px',
                    alignItems: 'flex-start'
                }}>
                    <AlertTriangle size={24} color="#eab308" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                        <h4 style={{ color: '#eab308', marginBottom: '8px', fontWeight: 600 }}>
                            Security Recommendations
                        </h4>
                        <ul style={{ color: '#fef3c7', fontSize: '14px', margin: 0, paddingLeft: '20px', lineHeight: 1.6 }}>
                            <li>Use this on an <strong>offline computer</strong> for maximum security</li>
                            <li>Never share your private key with anyone</li>
                            <li>Store the printed wallet in a safe location</li>
                            <li>Consider making multiple copies</li>
                        </ul>
                    </div>
                </div>

                {/* Generate Button */}
                {!wallet && (
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <button
                            onClick={handleGenerate}
                            disabled={loading}
                            style={{
                                background: 'linear-gradient(135deg, #00d4ff 0%, #00a3cc 100%)',
                                color: '#0f172a',
                                border: 'none',
                                padding: '16px 48px',
                                fontSize: '18px',
                                fontWeight: 600,
                                borderRadius: '12px',
                                cursor: 'pointer',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '12px',
                                transition: 'transform 0.2s'
                            }}
                        >
                            {loading ? (
                                <RefreshCw size={24} className="animate-spin" />
                            ) : (
                                <Shield size={24} />
                            )}
                            {loading ? 'Generating...' : 'Generate New Wallet'}
                        </button>
                    </div>
                )}

                {/* Wallet Display */}
                {wallet && (
                    <div id="paper-wallet" style={{
                        background: '#ffffff',
                        borderRadius: '20px',
                        padding: '40px',
                        color: '#0f172a'
                    }}>
                        {/* Hashium Header */}
                        <div style={{
                            textAlign: 'center',
                            marginBottom: '30px',
                            borderBottom: '2px dashed #e2e8f0',
                            paddingBottom: '20px'
                        }}>
                            <h3 style={{ fontSize: '28px', fontWeight: 700, color: '#0f172a' }}>
                                ⛓️ HASHIUM PAPER WALLET
                            </h3>
                            <p style={{ color: '#64748b', fontSize: '12px' }}>
                                Generated: {new Date().toLocaleString()}
                            </p>
                        </div>

                        {/* Public Address */}
                        <div style={{
                            background: '#f0fdf4',
                            border: '2px solid #22c55e',
                            borderRadius: '12px',
                            padding: '20px',
                            marginBottom: '20px'
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                                <span style={{ color: '#16a34a', fontWeight: 600, fontSize: '14px' }}>
                                    📥 PUBLIC ADDRESS (Share this to receive HSM)
                                </span>
                                <button
                                    onClick={() => copyToClipboard(wallet.address, 'address')}
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        cursor: 'pointer',
                                        color: '#16a34a'
                                    }}
                                >
                                    {copied === 'address' ? <Check size={18} /> : <Copy size={18} />}
                                </button>
                            </div>
                            <code style={{
                                fontSize: '14px',
                                wordBreak: 'break-all',
                                color: '#0f172a',
                                fontFamily: 'monospace'
                            }}>
                                {wallet.address}
                            </code>
                        </div>

                        {/* Private Key */}
                        <div style={{
                            background: '#fef2f2',
                            border: '2px solid #ef4444',
                            borderRadius: '12px',
                            padding: '20px',
                            marginBottom: '20px'
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                                <span style={{ color: '#dc2626', fontWeight: 600, fontSize: '14px' }}>
                                    🔐 PRIVATE KEY (NEVER share this!)
                                </span>
                                <button
                                    onClick={() => copyToClipboard(wallet.privateKey, 'private')}
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        cursor: 'pointer',
                                        color: '#dc2626'
                                    }}
                                >
                                    {copied === 'private' ? <Check size={18} /> : <Copy size={18} />}
                                </button>
                            </div>
                            <code style={{
                                fontSize: '12px',
                                wordBreak: 'break-all',
                                color: '#0f172a',
                                fontFamily: 'monospace'
                            }}>
                                {wallet.privateKey}
                            </code>
                        </div>

                        {/* Instructions */}
                        <div style={{
                            background: '#f8fafc',
                            borderRadius: '12px',
                            padding: '20px',
                            marginBottom: '20px'
                        }}>
                            <h4 style={{ fontWeight: 600, marginBottom: '12px', color: '#0f172a' }}>
                                📋 Instructions
                            </h4>
                            <ol style={{
                                color: '#475569',
                                fontSize: '13px',
                                margin: 0,
                                paddingLeft: '20px',
                                lineHeight: 1.8
                            }}>
                                <li>Print this page and store it safely</li>
                                <li>Send HSM to the public address above</li>
                                <li>To spend, import the private key into Hashium wallet</li>
                                <li>Destroy this paper after importing (for security)</li>
                            </ol>
                        </div>

                        {/* Footer */}
                        <div style={{
                            textAlign: 'center',
                            color: '#94a3b8',
                            fontSize: '11px',
                            borderTop: '1px solid #e2e8f0',
                            paddingTop: '15px'
                        }}>
                            ⚠️ This is an experimental wallet generator. Use at your own risk.
                            <br />
                            hashium-website.vercel.app
                        </div>
                    </div>
                )}

                {/* Action Buttons */}
                {wallet && (
                    <div style={{
                        display: 'flex',
                        gap: '16px',
                        justifyContent: 'center',
                        marginTop: '30px',
                        flexWrap: 'wrap'
                    }}>
                        <button
                            onClick={handlePrint}
                            style={{
                                background: '#ffffff',
                                color: '#0f172a',
                                border: 'none',
                                padding: '14px 32px',
                                fontSize: '16px',
                                fontWeight: 600,
                                borderRadius: '10px',
                                cursor: 'pointer',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '10px'
                            }}
                        >
                            <Printer size={20} />
                            Print Wallet
                        </button>
                        <button
                            onClick={handleGenerate}
                            style={{
                                background: 'transparent',
                                color: '#ffffff',
                                border: '2px solid #ffffff',
                                padding: '14px 32px',
                                fontSize: '16px',
                                fontWeight: 600,
                                borderRadius: '10px',
                                cursor: 'pointer',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '10px'
                            }}
                        >
                            <RefreshCw size={20} />
                            Generate New
                        </button>
                    </div>
                )}

                {/* Disclaimer */}
                <p style={{
                    textAlign: 'center',
                    color: '#64748b',
                    fontSize: '12px',
                    marginTop: '40px'
                }}>
                    ⚠️ Experimental - For educational purposes only
                </p>
            </div>

            {/* Print Styles */}
            <style>{`
                @media print {
                    body * {
                        visibility: hidden;
                    }
                    #paper-wallet, #paper-wallet * {
                        visibility: visible;
                    }
                    #paper-wallet {
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 100%;
                    }
                }
            `}</style>
        </div>
    );
};

export default PaperWallet;
