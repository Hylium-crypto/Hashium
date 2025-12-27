# Hashium Backend API

Express.js backend API for the Hashium website.

## Quick Start

```bash
# Install dependencies
npm install

# Copy environment file and configure
cp .env.example .env

# Generate Prisma client
npm run db:generate

# Push database schema
npm run db:push

# Start development server
npm run dev
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login and get tokens |
| POST | `/api/auth/refresh` | Refresh access token |
| GET | `/api/auth/me` | Get current user |
| GET | `/api/stats` | Network statistics |
| POST | `/api/newsletter` | Subscribe to newsletter |
| POST | `/api/contact` | Submit contact form |
| GET | `/api/downloads` | Available downloads |
| POST | `/api/rpc` | Proxy to Hashium node RPC |
| GET | `/health` | Health check |

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Compile TypeScript to JavaScript |
| `npm start` | Run production server |
| `npm run db:generate` | Generate Prisma client |
| `npm run db:push` | Push schema to database |
| `npm run db:migrate` | Run database migrations |
| `npm run db:studio` | Open Prisma Studio |

## Environment Variables

See [.env.example](.env.example) for all configuration options.

> ⚠️ **Important**: Never use default JWT secrets in production!

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: SQLite (via Prisma)
- **Authentication**: JWT (access + refresh tokens)

## License

MIT - See [../COPYING](../COPYING)
