# Hashium Mining Guide

A comprehensive guide to mining Hashium (HSM).

---

## Overview

Hashium uses **SHA-256 Proof of Work**, the same algorithm as Bitcoin. You can mine with:
- CPUs (slow but easy)
- GPUs (not optimized)
- ASICs (fastest, SHA-256 miners)

---

## Quick Start (Solo Mining)

### 1. Start your node
```bash
./hashiumd -daemon
```

### 2. Wait for sync
```bash
./hashium-cli getblockchaininfo
```
Check that `"blocks"` matches current network height.

### 3. Get a receiving address
```bash
./hashium-cli getnewaddress "mining"
```

### 4. Start mining
```bash
./hashium-cli generatetoaddress 1 "YOUR_ADDRESS"
```

---

## Mining Commands

| Command | Description |
|---------|-------------|
| `generatetoaddress N ADDRESS` | Mine N blocks to ADDRESS |
| `getmininginfo` | View mining status |
| `getnetworkhashps` | Network hashrate |
| `getdifficulty` | Current difficulty |

---

## Mining Configuration

Add to `hashium.conf`:
```
# Mining settings
gen=1                    # Enable mining
genproclimit=4           # Number of CPU threads
```

Location:
- **macOS**: `~/Library/Application Support/Hashium/hashium.conf`
- **Linux**: `~/.hashium/hashium.conf`
- **Windows**: `%APPDATA%\Hashium\hashium.conf`

---

## Block Rewards

| Block Range | Reward |
|-------------|--------|
| 0 - 209,999 | 50 HSM |
| 210,000 - 419,999 | 25 HSM |
| 420,000 - 629,999 | 12.5 HSM |
| ... | (halving every 210,000 blocks) |

---

## Difficulty Adjustment (DGW)

Since v1.8.0, Hashium uses **Dark Gravity Wave**:
- Difficulty adjusts **every block**
- Uses 24-block rolling average
- Responds quickly to hashrate changes

---

## Pool Mining

**Coming Soon!**

Community mining pools are being set up. Check Discord for updates.

---

## Estimated Earnings

Use the [Mining Calculator](https://hashium-website.vercel.app) on our website to estimate earnings based on your hashrate.

---

## Troubleshooting

### "Block not accepted"
- Check you're synced: `getblockchaininfo`
- Check peers: `getpeerinfo`

### "RPC connection refused"
- Make sure `hashiumd` is running
- Check `hashium.conf` for RPC settings

### CPU usage too high
- Reduce threads: `genproclimit=1`
- Or use external miner software

---

## Resources

- [Hashium GitHub](https://github.com/Hylium-crypto/Hashium)
- [Website](https://hashium-website.vercel.app)
- [WHITEPAPER](WHITEPAPER.md)

---

*Happy Mining! ⛏️*
