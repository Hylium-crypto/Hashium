import { useState } from 'react';
import { QrCode, Copy, Check, Share2 } from 'lucide-react';

// Simple QR Code component using a free API
const QRCodeImage = ({ data, size = 200 }: { data: string; size?: number }) => {
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(data)}`;

    return (
        <img
            src={qrUrl}
            alt="QR Code"
            style={{
                width: size,
                height: size,
                borderRadius: '12px',
                border: '4px solid #00d4ff'
            }}
        />
    );
};

const PaymentRequest = () => {
    const [address, setAddress] = useState('');
    const [amount, setAmount] = useState('');
    const [label, setLabel] = useState('');
    const [showQR, setShowQR] = useState(false);
    const [copied, setCopied] = useState(false);

    // Generate Hashium payment URI (similar to bitcoin: URI)
    const generatePaymentURI = () => {
        let uri = `hashium:${address}`;
        const params: string[] = [];

        if (amount) params.push(`amount=${amount}`);
        if (label) params.push(`label=${encodeURIComponent(label)}`);

        if (params.length > 0) {
            uri += '?' + params.join('&');
        }

        return uri;
    };

    const handleGenerate = () => {
        if (address) {
            setShowQR(true);
        }
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(generatePaymentURI());
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const sharePayment = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Hashium Payment Request',
                    text: `Pay ${amount || ''} HSM to ${address}`,
                    url: generatePaymentURI()
                });
            } catch {
                // Share cancelled or not supported
            }
        } else {
            copyToClipboard();
        }
    };

    return (
        <div style={{
            minHeight: '70vh',
            background: 'linear-gradient(180deg, #ffffff 0%, #f0f9ff 100%)',
            padding: '60px 24px'
        }}>
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <h2 style={{
                        fontSize: '36px',
                        fontWeight: 700,
                        color: '#0f172a',
                        marginBottom: '12px'
                    }}>
                        📱 Payment Request
                    </h2>
                    <p style={{ color: '#64748b', fontSize: '16px' }}>
                        Generate a QR code to receive HSM payments
                    </p>
                </div>

                {!showQR ? (
                    /* Input Form */
                    <div style={{
                        background: '#ffffff',
                        borderRadius: '20px',
                        padding: '32px',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
                    }}>
                        {/* Address Input */}
                        <div style={{ marginBottom: '24px' }}>
                            <label style={{
                                display: 'block',
                                marginBottom: '8px',
                                fontWeight: 600,
                                color: '#0f172a'
                            }}>
                                Your Hashium Address *
                            </label>
                            <input
                                type="text"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                placeholder="hyl1..."
                                style={{
                                    width: '100%',
                                    padding: '14px 16px',
                                    border: '2px solid #e2e8f0',
                                    borderRadius: '12px',
                                    fontSize: '15px',
                                    outline: 'none',
                                    transition: 'border-color 0.2s',
                                    boxSizing: 'border-box'
                                }}
                                onFocus={(e) => e.target.style.borderColor = '#00d4ff'}
                                onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                            />
                        </div>

                        {/* Amount Input */}
                        <div style={{ marginBottom: '24px' }}>
                            <label style={{
                                display: 'block',
                                marginBottom: '8px',
                                fontWeight: 600,
                                color: '#0f172a'
                            }}>
                                Amount (HSM) - Optional
                            </label>
                            <input
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                placeholder="0.00"
                                step="0.00000001"
                                style={{
                                    width: '100%',
                                    padding: '14px 16px',
                                    border: '2px solid #e2e8f0',
                                    borderRadius: '12px',
                                    fontSize: '15px',
                                    outline: 'none',
                                    boxSizing: 'border-box'
                                }}
                                onFocus={(e) => e.target.style.borderColor = '#00d4ff'}
                                onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                            />
                        </div>

                        {/* Label Input */}
                        <div style={{ marginBottom: '32px' }}>
                            <label style={{
                                display: 'block',
                                marginBottom: '8px',
                                fontWeight: 600,
                                color: '#0f172a'
                            }}>
                                Label/Note - Optional
                            </label>
                            <input
                                type="text"
                                value={label}
                                onChange={(e) => setLabel(e.target.value)}
                                placeholder="e.g., Coffee payment"
                                style={{
                                    width: '100%',
                                    padding: '14px 16px',
                                    border: '2px solid #e2e8f0',
                                    borderRadius: '12px',
                                    fontSize: '15px',
                                    outline: 'none',
                                    boxSizing: 'border-box'
                                }}
                                onFocus={(e) => e.target.style.borderColor = '#00d4ff'}
                                onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                            />
                        </div>

                        {/* Generate Button */}
                        <button
                            onClick={handleGenerate}
                            disabled={!address}
                            style={{
                                width: '100%',
                                padding: '16px',
                                background: address ? 'linear-gradient(135deg, #00d4ff 0%, #00a3cc 100%)' : '#e2e8f0',
                                color: address ? '#0f172a' : '#94a3b8',
                                border: 'none',
                                borderRadius: '12px',
                                fontSize: '16px',
                                fontWeight: 600,
                                cursor: address ? 'pointer' : 'not-allowed',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '10px'
                            }}
                        >
                            <QrCode size={20} />
                            Generate QR Code
                        </button>
                    </div>
                ) : (
                    /* QR Code Display */
                    <div style={{
                        background: '#ffffff',
                        borderRadius: '20px',
                        padding: '40px',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                        textAlign: 'center'
                    }}>
                        {/* QR Code */}
                        <div style={{ marginBottom: '24px' }}>
                            <QRCodeImage data={generatePaymentURI()} size={220} />
                        </div>

                        {/* Payment Details */}
                        <div style={{
                            background: '#f8fafc',
                            borderRadius: '12px',
                            padding: '20px',
                            marginBottom: '24px',
                            textAlign: 'left'
                        }}>
                            <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '8px' }}>
                                <strong>Address:</strong>
                            </p>
                            <p style={{
                                fontSize: '13px',
                                color: '#0f172a',
                                wordBreak: 'break-all',
                                fontFamily: 'monospace',
                                marginBottom: '16px'
                            }}>
                                {address}
                            </p>

                            {amount && (
                                <>
                                    <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '8px' }}>
                                        <strong>Amount:</strong>
                                    </p>
                                    <p style={{
                                        fontSize: '24px',
                                        fontWeight: 700,
                                        color: '#00d4ff',
                                        marginBottom: '16px'
                                    }}>
                                        {amount} HSM
                                    </p>
                                </>
                            )}

                            {label && (
                                <>
                                    <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '8px' }}>
                                        <strong>Note:</strong>
                                    </p>
                                    <p style={{ fontSize: '14px', color: '#0f172a' }}>
                                        {label}
                                    </p>
                                </>
                            )}
                        </div>

                        {/* Action Buttons */}
                        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <button
                                onClick={copyToClipboard}
                                style={{
                                    padding: '12px 24px',
                                    background: '#0f172a',
                                    color: '#ffffff',
                                    border: 'none',
                                    borderRadius: '10px',
                                    fontSize: '14px',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px'
                                }}
                            >
                                {copied ? <Check size={18} /> : <Copy size={18} />}
                                {copied ? 'Copied!' : 'Copy URI'}
                            </button>

                            <button
                                onClick={sharePayment}
                                style={{
                                    padding: '12px 24px',
                                    background: '#00d4ff',
                                    color: '#0f172a',
                                    border: 'none',
                                    borderRadius: '10px',
                                    fontSize: '14px',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px'
                                }}
                            >
                                <Share2 size={18} />
                                Share
                            </button>

                            <button
                                onClick={() => setShowQR(false)}
                                style={{
                                    padding: '12px 24px',
                                    background: 'transparent',
                                    color: '#64748b',
                                    border: '2px solid #e2e8f0',
                                    borderRadius: '10px',
                                    fontSize: '14px',
                                    fontWeight: 600,
                                    cursor: 'pointer'
                                }}
                            >
                                New Request
                            </button>
                        </div>
                    </div>
                )}

                {/* Info */}
                <p style={{
                    textAlign: 'center',
                    color: '#94a3b8',
                    fontSize: '13px',
                    marginTop: '30px'
                }}>
                    📱 Scan the QR code with any Hashium wallet to pay
                </p>
            </div>
        </div>
    );
};

export default PaymentRequest;
