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

## 📊 Project Status

> **⚠️ Early Development Phase**

| Status | Details |
|--------|---------|
| Network | **Very small** (~1-5 nodes) |
| Stage | Experimental/Testing |
| Blocks | Mining active |
| Peers | Limited - need more nodes! |

**This is a new project. The network is small and experimental.**

---

## 🔧 Technical Specs

| Property | Value |
|----------|-------|
| Algorithm | SHA-256 (PoW) |
| Max Supply | 21,000,000 HSM |
| Block Reward | 50 HSM |
| Smallest Unit | 1 hashi = 0.00000001 HSM |
| P2P Port | 9333 |
| RPC Port | 9332 |

> Note: Block timing and difficulty are still stabilizing in this early phase.

---

## ⛏️ Mining

```bash
./hashium-cli generatetoaddress 1 "YOUR_ADDRESS"
```

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

## 📁 Data Directory

| Platform | Location |
|----------|----------|
| macOS | `~/Library/Application Support/Hashium/` |
| Linux | `~/.hashium/` |

---

## ⚖️ License

MIT License - See [COPYING](COPYING)

---

## 🔗 Links

- **GitHub**: https://github.com/Hylium-crypto/Hashium
- **Releases**: https://github.com/Hylium-crypto/Hashium/releases

---

<p align="center">
  <sub>⚠️ Experimental open-source project. Not financial advice. <a href="DISCLAIMER.md">Read Disclaimer</a></sub>
</p>
