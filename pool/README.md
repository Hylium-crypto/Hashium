# Hashium Mining Pool

This directory contains configuration for running a Hashium mining pool using NOMP (Node Open Mining Portal).

## Quick Start

### Requirements
- Node.js 16+
- Redis server
- Running Hashium node with RPC

### Installation

```bash
# Clone NOMP
git clone https://github.com/zone117x/node-open-mining-portal.git pool
cd pool
npm install

# Copy Hashium config
cp ../hashium-pool.json coins/hashium.json
cp ../pool-config.json pool_configs/hashium.json

# Start Redis
redis-server &

# Start pool
node init.js
```

## Pool URLs

| Service | Port |
|---------|------|
| Stratum | 3333 |
| Web UI | 8080 |
| API | 8080/api |

## Mining with your pool

```bash
# Example BFGMiner command
bfgminer -o stratum+tcp://YOUR_IP:3333 -u YOUR_HASHIUM_ADDRESS -p x
```
