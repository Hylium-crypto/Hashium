import { useState } from 'react';
import { CheckCircle, XCircle, Search, AlertCircle } from 'lucide-react';

// Hashium address validation rules
const validateHashiumAddress = (address: string): {
    valid: boolean;
    type: string;
    message: string;
    details: string[];
} => {
    const trimmedAddress = address.trim();

    if (!trimmedAddress) {
        return {
            valid: false,
            type: 'none',
            message: 'Please enter an address',
            details: []
        };
    }

    // Check for Bech32 address (hyl1...)
    if (trimmedAddress.toLowerCase().startsWith('hyl1')) {
        const addressPart = trimmedAddress.slice(4);

        // Bech32 should be 39-59 characters after prefix
        if (addressPart.length < 38 || addressPart.length > 59) {
            return {
                valid: false,
                type: 'bech32',
                message: 'Invalid Bech32 address length',
                details: [
                    `Current length: ${trimmedAddress.length} characters`,
                    'Expected: 42-63 characters total',
                    'Format: hyl1 + 38-59 characters'
                ]
            };
        }

        // Check for valid bech32 characters (lowercase alphanumeric, no 1, b, i, o)
        const validBech32Chars = /^[023456789acdefghjklmnpqrstuvwxyz]+$/;
        if (!validBech32Chars.test(addressPart.toLowerCase())) {
            return {
                valid: false,
                type: 'bech32',
                message: 'Invalid characters in address',
                details: [
                    'Bech32 addresses use: 023456789acdefghjklmnpqrstuvwxyz',
                    'Characters 1, b, i, o are not allowed'
                ]
            };
        }

        return {
            valid: true,
            type: 'bech32',
            message: 'Valid Hashium Bech32 Address',
            details: [
                '✓ Correct prefix (hyl1)',
                '✓ Valid length',
                '✓ Valid character set',
                'This is a native SegWit address'
            ]
        };
    }

    // Check for Legacy address (K...)
    if (trimmedAddress.startsWith('K')) {
        // Legacy P2PKH addresses are typically 34 characters
        if (trimmedAddress.length !== 34) {
            return {
                valid: false,
                type: 'legacy',
                message: 'Invalid Legacy address length',
                details: [
                    `Current length: ${trimmedAddress.length} characters`,
                    'Expected: 34 characters',
                    'Format: K + 33 characters'
                ]
            };
        }

        // Base58 characters
        const validBase58Chars = /^[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]+$/;
        if (!validBase58Chars.test(trimmedAddress)) {
            return {
                valid: false,
                type: 'legacy',
                message: 'Invalid characters in address',
                details: [
                    'Base58 does not include: 0, O, I, l',
                    'Check for typos'
                ]
            };
        }

        return {
            valid: true,
            type: 'legacy',
            message: 'Valid Hashium Legacy Address',
            details: [
                '✓ Correct prefix (K)',
                '✓ Valid length (34 chars)',
                '✓ Valid Base58 characters',
                'This is a P2PKH legacy address'
            ]
        };
    }

    // Check for Script address (N...)
    if (trimmedAddress.startsWith('N')) {
        if (trimmedAddress.length !== 34) {
            return {
                valid: false,
                type: 'script',
                message: 'Invalid Script address length',
                details: [
                    `Current length: ${trimmedAddress.length} characters`,
                    'Expected: 34 characters'
                ]
            };
        }

        return {
            valid: true,
            type: 'script',
            message: 'Valid Hashium Script Address',
            details: [
                '✓ Correct prefix (N)',
                '✓ Valid length (34 chars)',
                'This is a P2SH script address'
            ]
        };
    }

    // Unknown format
    return {
        valid: false,
        type: 'unknown',
        message: 'Unknown address format',
        details: [
            'Valid Hashium addresses start with:',
            '• hyl1... (Bech32/SegWit)',
            '• K... (Legacy P2PKH)',
            '• N... (Script P2SH)'
        ]
    };
};

const AddressValidator = () => {
    const [address, setAddress] = useState('');
    const [result, setResult] = useState<ReturnType<typeof validateHashiumAddress> | null>(null);

    const handleValidate = () => {
        const validationResult = validateHashiumAddress(address);
        setResult(validationResult);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleValidate();
        }
    };

    return (
        <div style={{
            minHeight: '60vh',
            background: 'linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%)',
            padding: '60px 24px'
        }}>
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <h2 style={{
                        fontSize: '36px',
                        fontWeight: 700,
                        color: '#0f172a',
                        marginBottom: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '12px'
                    }}>
                        <Search size={36} color="#00d4ff" />
                        Address Validator
                    </h2>
                    <p style={{ color: '#64748b', fontSize: '16px' }}>
                        Check if a Hashium address is valid
                    </p>
                </div>

                {/* Input Section */}
                <div style={{
                    background: '#ffffff',
                    borderRadius: '20px',
                    padding: '32px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
                }}>
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{
                            display: 'block',
                            marginBottom: '8px',
                            fontWeight: 600,
                            color: '#0f172a'
                        }}>
                            Enter Hashium Address
                        </label>
                        <input
                            type="text"
                            value={address}
                            onChange={(e) => {
                                setAddress(e.target.value);
                                setResult(null);
                            }}
                            onKeyPress={handleKeyPress}
                            placeholder="hyl1... or K..."
                            style={{
                                width: '100%',
                                padding: '16px 20px',
                                border: '2px solid #e2e8f0',
                                borderRadius: '12px',
                                fontSize: '16px',
                                fontFamily: 'monospace',
                                outline: 'none',
                                boxSizing: 'border-box',
                                transition: 'border-color 0.2s'
                            }}
                            onFocus={(e) => e.target.style.borderColor = '#00d4ff'}
                            onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                        />
                    </div>

                    <button
                        onClick={handleValidate}
                        style={{
                            width: '100%',
                            padding: '16px',
                            background: 'linear-gradient(135deg, #00d4ff 0%, #00a3cc 100%)',
                            color: '#0f172a',
                            border: 'none',
                            borderRadius: '12px',
                            fontSize: '16px',
                            fontWeight: 600,
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '10px'
                        }}
                    >
                        <CheckCircle size={20} />
                        Validate Address
                    </button>
                </div>

                {/* Result Section */}
                {result && (
                    <div style={{
                        marginTop: '24px',
                        background: result.valid
                            ? 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)'
                            : 'linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)',
                        borderRadius: '16px',
                        padding: '24px',
                        border: `2px solid ${result.valid ? '#22c55e' : '#ef4444'}`
                    }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            marginBottom: '16px'
                        }}>
                            {result.valid ? (
                                <CheckCircle size={32} color="#16a34a" />
                            ) : (
                                <XCircle size={32} color="#dc2626" />
                            )}
                            <div>
                                <h3 style={{
                                    fontSize: '20px',
                                    fontWeight: 600,
                                    color: result.valid ? '#166534' : '#991b1b',
                                    marginBottom: '4px'
                                }}>
                                    {result.message}
                                </h3>
                                <span style={{
                                    fontSize: '12px',
                                    padding: '4px 12px',
                                    background: result.valid ? '#22c55e' : '#ef4444',
                                    color: '#fff',
                                    borderRadius: '20px',
                                    fontWeight: 500
                                }}>
                                    {result.type.toUpperCase()}
                                </span>
                            </div>
                        </div>

                        {result.details.length > 0 && (
                            <ul style={{
                                margin: 0,
                                paddingLeft: '20px',
                                color: result.valid ? '#166534' : '#991b1b',
                                fontSize: '14px',
                                lineHeight: 1.8
                            }}>
                                {result.details.map((detail, index) => (
                                    <li key={index}>{detail}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                )}

                {/* Address Formats Info */}
                <div style={{
                    marginTop: '32px',
                    background: '#ffffff',
                    borderRadius: '16px',
                    padding: '24px',
                    border: '1px solid #e2e8f0'
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        marginBottom: '16px'
                    }}>
                        <AlertCircle size={20} color="#64748b" />
                        <h4 style={{ fontWeight: 600, color: '#0f172a' }}>
                            Hashium Address Formats
                        </h4>
                    </div>
                    <div style={{ display: 'grid', gap: '12px' }}>
                        <div style={{
                            padding: '12px',
                            background: '#f8fafc',
                            borderRadius: '8px'
                        }}>
                            <code style={{ color: '#00d4ff', fontWeight: 600 }}>hyl1...</code>
                            <span style={{ color: '#64748b', marginLeft: '12px', fontSize: '14px' }}>
                                Bech32 (Native SegWit) - Recommended
                            </span>
                        </div>
                        <div style={{
                            padding: '12px',
                            background: '#f8fafc',
                            borderRadius: '8px'
                        }}>
                            <code style={{ color: '#f59e0b', fontWeight: 600 }}>K...</code>
                            <span style={{ color: '#64748b', marginLeft: '12px', fontSize: '14px' }}>
                                Legacy P2PKH Address
                            </span>
                        </div>
                        <div style={{
                            padding: '12px',
                            background: '#f8fafc',
                            borderRadius: '8px'
                        }}>
                            <code style={{ color: '#8b5cf6', fontWeight: 600 }}>N...</code>
                            <span style={{ color: '#64748b', marginLeft: '12px', fontSize: '14px' }}>
                                Script P2SH Address
                            </span>
                        </div>
                    </div>
                </div>

                {/* Disclaimer */}
                <p style={{
                    textAlign: 'center',
                    color: '#94a3b8',
                    fontSize: '12px',
                    marginTop: '24px'
                }}>
                    ⚠️ This validates address format only, not if it exists on the blockchain
                </p>
            </div>
        </div>
    );
};

export default AddressValidator;
