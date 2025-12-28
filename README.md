# Hashium

<p align="center">
  <img src="Logo.png" alt="Hashium Logo" width="200">
</p>

<h3 align="center">🔒 Security • 💎 Scarcity • 🏦 Store of Value</h3>

<p align="center">
  <a href="https://github.com/Hylium-crypto/Hashium/releases/latest">
    <img src="https://img.shields.io/github/v/release/Hylium-crypto/Hashium?label=Download&color=00d4ff" alt="Download">
  </a>
  <a href="https://github.com/Hylium-crypto/Hashium/actions/workflows/ci.yml">
    <img src="https://github.com/Hylium-crypto/Hashium/actions/workflows/ci.yml/badge.svg" alt="CI">
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License">
  </a>
</p>

---

## 📥 Download

**[⬇️ Download Latest Release](https://github.com/Hylium-crypto/Hashium/releases/latest)**

| Platform | File |
|----------|------|
| macOS (Apple Silicon M1/M2/M3) | `Hashium-vX.X.X-macOS.tar.gz` |
| Linux (x86_64) | `Hashium-vX.X.X-Linux.tar.gz` |

---

## 🚀 Quick Start

### 1. Download & Extract
```bash
# Download from releases page
tar -xzf Hashium-*.tar.gz
cd Hashium-*
```

### 2. Run GUI Wallet
```bash
./hashium-qt
```

### 3. Or Command Line
```bash
# Start node
./hashiumd -daemon

# Check status
./hashium-cli getblockchaininfo

# Create wallet address
./hashium-cli getnewaddress

# Check balance
./hashium-cli getbalance
```

### macOS Security Note
If macOS says the app is "damaged", run:
```bash
xattr -cr Hashium-*-macOS
./hashium-qt
```

---

## 💰 Tokenomics

| Property | Value |
|----------|-------|
| **Max Supply** | 21,000,000 HSM |
| **Block Reward** | 50 HSM |
| **Halving** | Every 210,000 blocks |
| **Block Time** | ~10 minutes |
| **Consensus** | Proof of Work (SHA-256) |
| **Smallest Unit** | 1 hashi = 0.00000001 HSM |

---

## ⛏️ Mining

```bash
# Start mining to your address
./hashium-cli generatetoaddress 1 "YOUR_ADDRESS"

# Or mine continuously (100 blocks)
./hashium-cli generatetoaddress 100 "YOUR_ADDRESS"
```

---

## 🔧 Build from Source

### Prerequisites

**macOS:**
```bash
brew install cmake boost libevent sqlite miniupnpc libnatpmp berkeley-db@4 qt@6 qrencode
```

**Ubuntu/Debian:**
```bash
sudo apt-get install build-essential cmake libevent-dev libboost-dev \
  libboost-filesystem-dev libsqlite3-dev libminiupnpc-dev libnatpmp-dev \
  libdb++-dev qt6-base-dev qt6-tools-dev libqrencode-dev
```

### Build
```bash
git clone https://github.com/Hylium-crypto/Hashium.git
cd Hashium

cmake -B build -DCMAKE_BUILD_TYPE=Release -DBUILD_GUI=ON -DBUILD_WALLET=ON
cmake --build build -j$(nproc)

# Binaries in build/bin/
./build/bin/hashium-qt
```

---

## 📁 Data Directory

| Platform | Location |
|----------|----------|
| macOS | `~/Library/Application Support/Hashium/` |
| Linux | `~/.hashium/` |

---

## 🌐 Network

| Parameter | Value |
|-----------|-------|
| P2P Port | 9333 |
| RPC Port | 9332 |
| Bech32 Prefix | `hyl` |
| Genesis Date | December 27, 2025 |

---

## 📖 Documentation

- [Build Guide](doc/build-unix.md) - Detailed build instructions
- [Mining Guide](doc/mining.md) - How to mine HSM
- [RPC Commands](doc/commands.md) - Full command reference

---

## ⚠️ Disclaimer

> **IMPORTANT:** Hashium is **EXPERIMENTAL SOFTWARE** provided for educational purposes only.
> 
> - This is **NOT AN INVESTMENT** - no financial returns are promised or implied
> - The developers make **NO GUARANTEES** about value, functionality, or future development
> - You may **LOSE ALL VALUE** associated with HSM tokens
> - Use at your own risk
>
> **[Read Full Disclaimer](DISCLAIMER.md)**

---

## ⚖️ License

Hashium is released under the [MIT License](COPYING).

---

## 🔗 Links

- **Website**: https://hashium-website.vercel.app
- **GitHub**: https://github.com/Hylium-crypto/Hashium
- **Releases**: https://github.com/Hylium-crypto/Hashium/releases

---

<p align="center">
  <b>Built with ❤️ on Bitcoin Core</b><br>
  <i>Hashium - An Educational Blockchain Experiment</i>
</p>

<p align="center">
  <sub>⚠️ This is experimental software. Not financial advice. <a href="DISCLAIMER.md">Read Disclaimer</a></sub>
</p>

