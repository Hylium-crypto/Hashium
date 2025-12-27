import dotenv from 'dotenv';
dotenv.config();

// Security: Check for default/insecure JWT secrets
const DEFAULT_JWT_SECRET = 'change-me';
const DEFAULT_JWT_REFRESH_SECRET = 'change-me-refresh';

const jwtSecret = process.env.JWT_SECRET || DEFAULT_JWT_SECRET;
const jwtRefreshSecret = process.env.JWT_REFRESH_SECRET || DEFAULT_JWT_REFRESH_SECRET;

// Warn about insecure defaults
if (jwtSecret === DEFAULT_JWT_SECRET || jwtRefreshSecret === DEFAULT_JWT_REFRESH_SECRET) {
    console.warn('\n⚠️  WARNING: Using default JWT secrets!');
    console.warn('   This is INSECURE and should NEVER be used in production.');
    console.warn('   Set JWT_SECRET and JWT_REFRESH_SECRET environment variables.');
    console.warn('   See .env.example for configuration details.\n');
    
    // Fail hard in production
    if (process.env.NODE_ENV === 'production') {
        console.error('❌ FATAL: Cannot start in production with default JWT secrets!');
        console.error('   Set proper JWT_SECRET and JWT_REFRESH_SECRET values.');
        process.exit(1);
    }
}

export const config = {
    env: process.env.NODE_ENV || 'development',
    port: parseInt(process.env.PORT || '3001', 10),

    jwt: {
        secret: jwtSecret,
        refreshSecret: jwtRefreshSecret,
        expiresIn: process.env.JWT_EXPIRES_IN || '15m',
        refreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN || '7d',
    },

    hashiumRpc: {
        url: process.env.HSMIUM_RPC_URL || 'http://127.0.0.1:8332',
        user: process.env.HSMIUM_RPC_USER || '',
        pass: process.env.HSMIUM_RPC_PASS || '',
    },

    cors: {
        origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
    },

    rateLimit: {
        windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000', 10),
        max: parseInt(process.env.RATE_LIMIT_MAX || '100', 10),
    },
};
