# Hashium

<p align="center">
  <img src="Logo.png" alt="Hashium Logo" width="200">
</p>

<h3 align="center">⚠️ Experimental Cryptocurrency Project</h3>

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
  <a href="https://discord.gg/YOUR_DISCORD">
    <img src="https://img.shields.io/badge/Discord-Join-7289da" alt="Discord">
  </a>
</p>

> **⚠️ WARNING:** This is an experimental open-source project for educational purposes only. 
> This is NOT an investment. No guarantees are made. See [DISCLAIMER.md](DISCLAIMER.md).

---

## 📥 Download

**[⬇️ Download Latest Release](https://github.com/Hylium-crypto/Hashium/releases/latest)**

| Platform | File |
|----------|------|
| Windows (x64) | `Hashium-vX.X.X-Windows.zip` |
| macOS (Apple Silicon) | `Hashium-vX.X.X-macOS.tar.gz` |
| Linux (x86_64) | `Hashium-vX.X.X-Linux.tar.gz` |

---

## 🚀 Quick Start

### 1. Download & Extract
```bash
tar -xzf Hashium-*.tar.gz
cd Hashium-*
```

### 2. Run GUI Wallet
```bash
./hashium-qt
```

### 3. Command Line
```bash
./hashiumd -daemon      # Start node
./hashium-cli getinfo   # Check status
```

### macOS Security Fix
```bash
xattr -cr Hashium-*-macOS
```

---

## 📊 Network Status

| Property | Value |
|----------|-------|
| Algorithm | SHA-256 (PoW) |
| Max Supply | 21,000,000 HSM |
| Block Reward | 50 HSM |
| Block Time | ~10 minutes |
| **Difficulty Adjustment** | **DGW (per-block)** |
| Smallest Unit | 1 hashi = 0.00000001 HSM |
| P2P Port | 9333 |
| RPC Port | 9332 |

### Dark Gravity Wave (DGW)

Since v1.8.0, Hashium uses **Dark Gravity Wave** for difficulty adjustment:
- Adjusts difficulty every block (not every 2016 blocks)
- Uses 24-block rolling average
- Responds quickly to hashrate changes
- Maximum ±3x change per block

---

## ⛏️ Mining

### Solo Mining (CPU)
```bash
./hashium-cli generatetoaddress 1 "YOUR_ADDRESS"
```

### Pool Mining
Coming soon! Check [Discord](https://discord.gg/YOUR_DISCORD) for updates.

---

## 🔧 Build from Source

### macOS
```bash
brew install cmake boost libevent sqlite miniupnpc libnatpmp berkeley-db@4 qt@6 qrencode
git clone https://github.com/Hylium-crypto/Hashium.git
cd Hashium
cmake -B build -DCMAKE_BUILD_TYPE=Release -DBUILD_GUI=ON
cmake --build build -j$(sysctl -n hw.ncpu)
```

### Ubuntu/Debian
```bash
sudo apt-get install build-essential cmake libevent-dev libboost-dev \
  libsqlite3-dev libminiupnpc-dev libdb++-dev qt6-base-dev
git clone https://github.com/Hylium-crypto/Hashium.git
cd Hashium
cmake -B build -DCMAKE_BUILD_TYPE=Release -DBUILD_GUI=ON
cmake --build build -j$(nproc)
```

---

## 📁 Data Directory

| Platform | Location |
|----------|----------|
| macOS | `~/Library/Application Support/Hashium/` |
| Linux | `~/.hashium/` |
| Windows | `%APPDATA%\Hashium\` |

---

## 🔗 Links

| Resource | Link |
|----------|------|
| **Website** | [hashium-website.vercel.app](https://hashium-website.vercel.app) |
| **Releases** | [github.com/Hylium-crypto/Hashium/releases](https://github.com/Hylium-crypto/Hashium/releases) |
| **Changelog** | [CHANGELOG.md](CHANGELOG.md) |
| **Discord** | Coming soon |

---

## ⚠️ Disclaimer

> **IMPORTANT:** This is **EXPERIMENTAL SOFTWARE** for educational purposes only.
> 
> - **NOT AN INVESTMENT** - no financial returns are promised
> - **NO GUARANTEES** about value, functionality, or future
> - You may **LOSE EVERYTHING**
> - Use at your own risk
>
> **[Read Full Disclaimer](DISCLAIMER.md)**

---

## ⚖️ License

MIT License - See [COPYING](COPYING)

---

<p align="center">
  <sub>⚠️ Experimental open-source project. Not financial advice. <a href="DISCLAIMER.md">Read Disclaimer</a></sub>
</p>
