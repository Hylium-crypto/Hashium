# Hashium Docker Deployment Guide

Deploy a Hashium full node on any VPS using Docker.

## Requirements

- VPS with 2+ GB RAM (4GB recommended)
- Ubuntu 22.04 or similar
- Docker & Docker Compose installed

## Quick Start

### 1. Install Docker (if not installed)

```bash
curl -fsSL https://get.docker.com | sh
sudo usermod -aG docker $USER
# Log out and back in
```

### 2. Clone the repo

```bash
git clone https://github.com/Hylium-crypto/Hashium.git
cd Hashium/docker
```

### 3. Configure

```bash
cp .env.example .env
nano .env  # Set your RPC password!
```

### 4. Build & Run

```bash
# Option A: Use pre-built release
docker-compose up -d

# Option B: Build from source
docker-compose build
docker-compose up -d
```

### 5. Check status

```bash
docker logs -f hashium-node
docker exec hashium-node hashium-cli -rpcuser=hashium -rpcpassword=YOUR_PASSWORD getblockchaininfo
```

---

## Connect to Website API

After your node is running, add to Vercel environment:

```
HASHIUM_RPC_HOST = your.vps.ip.address
HASHIUM_RPC_PORT = 9332
HASHIUM_RPC_USER = hashium
HASHIUM_RPC_PASS = your_password
```

---

## Useful Commands

```bash
# View logs
docker logs -f hashium-node

# Get block count
docker exec hashium-node hashium-cli getblockcount

# Get network info
docker exec hashium-node hashium-cli getnetworkinfo

# Stop node
docker-compose down

# Restart node
docker-compose restart
```

---

## Security Notes

⚠️ **Important:**

1. Change the default RPC password!
2. Consider using a firewall (UFW)
3. Only expose port 9332 if needed for API

```bash
# UFW example
sudo ufw allow 9333/tcp  # P2P (required)
sudo ufw allow 9332/tcp  # RPC (only if needed externally)
```

---

## VPS Providers

Recommended providers:

| Provider | Min Plan | Monthly Cost |
|----------|----------|--------------|
| DigitalOcean | 2GB Droplet | $12 |
| Vultr | 2GB | $10 |
| Hetzner | CX21 | €5 |
| Contabo | VPS S | €5 |
