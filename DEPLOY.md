# Hashium Deployment Guide

## Quick Start with Docker

### Prerequisites
- Docker 20.10+
- Docker Compose 2.0+

### Deploy

```bash
# Clone repository
git clone https://github.com/Panagiotis012/Hashium.git
cd Hashium

# Configure environment
cp .env.example .env
# Edit .env and set JWT_SECRET, JWT_REFRESH_SECRET

# Build and run
docker compose up -d

# Check status
docker compose ps
docker compose logs -f
```

### Services

| Service | Port | Description |
|---------|------|-------------|
| Website | 80 | Public website |
| Backend | 3001 | API server |

### Health Check

```bash
# Backend
curl http://localhost:3001/health

# Website
curl http://localhost/
```

### SSL/TLS (Production)

For production, use a reverse proxy like nginx or Traefik with Let's Encrypt:

```yaml
# Add to docker-compose.yml
services:
  traefik:
    image: traefik:v2.10
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - ./traefik:/etc/traefik
```

### Monitoring

Recommended monitoring stack:
- **Prometheus** - Metrics collection
- **Grafana** - Dashboards
- **Loki** - Log aggregation

### Backup

```bash
# Backup database
docker compose exec backend cp /app/data/hashium.db /app/data/backup.db

# Export backup
docker compose cp backend:/app/data/backup.db ./backup.db
```

## Manual Deployment

### Backend

```bash
cd backend
npm ci --only=production
npm run db:generate
npm run build
NODE_ENV=production node dist/index.js
```

### Website

```bash
cd website
npm ci
npm run build
# Serve dist/ with nginx or any static file server
```

## Security Checklist

- [ ] Set strong JWT secrets (minimum 32 characters)
- [ ] Configure CORS for your domain
- [ ] Enable HTTPS
- [ ] Set up firewall rules
- [ ] Configure rate limiting
- [ ] Regular security updates
