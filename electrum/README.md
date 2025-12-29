# Hashium Electrum Server

Run an ElectrumX server for Hashium light wallets.

## Requirements

- Running Hashium node with `txindex=1`
- Python 3.8+
- LevelDB

## Quick Start

### 1. Install ElectrumX

```bash
git clone https://github.com/spesmilo/electrumx.git
cd electrumx
pip3 install .
```

### 2. Configure

Create `electrumx.conf`:
```bash
COIN = Hashium
NET = mainnet
DB_DIRECTORY = /data/electrumx
DAEMON_URL = http://hashium:Code@21342033@127.0.0.1:9332
SERVICES = tcp://:50001,ssl://:50002,rpc://
HOST = 0.0.0.0
PEER_DISCOVERY = self
```

### 3. Run

```bash
electrumx_server
```

## Docker

```bash
docker-compose -f docker-compose.electrum.yml up -d
```

## Ports

| Port | Protocol |
|------|----------|
| 50001 | TCP (unencrypted) |
| 50002 | SSL (encrypted) |

## Connecting Electrum Wallet

Edit `~/.electrum/config`:
```json
{
    "server": "your-server:50002:s"
}
```
