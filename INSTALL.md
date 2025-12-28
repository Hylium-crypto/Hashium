# Hashium Installation Guide

Complete guide to install and run the Hashium wallet.

---

## 📥 Method 1: Download Release (Recommended)

### Step 1: Download
Go to [Releases](https://github.com/Hylium-crypto/Hashium/releases/latest) and download:
- **macOS**: `Hashium-vX.X.X-macOS.tar.gz`
- **Linux**: `Hashium-vX.X.X-Linux.tar.gz`

### Step 2: Extract
```bash
tar -xzf Hashium-*.tar.gz
cd Hashium-*
```

### Step 3: Run
```bash
./hashium-qt    # GUI Wallet
# or
./hashiumd      # Node daemon
```

### macOS Security Fix
```bash
xattr -cr Hashium-*-macOS
```

---

## 🔧 Method 2: Build from Source

### macOS

```bash
# Install dependencies
brew install cmake boost libevent sqlite miniupnpc libnatpmp berkeley-db@4 qt@6 qrencode

# Clone and build
git clone https://github.com/Hylium-crypto/Hashium.git
cd Hashium
cmake -B build -DCMAKE_BUILD_TYPE=Release -DBUILD_GUI=ON -DBUILD_WALLET=ON
cmake --build build -j$(sysctl -n hw.ncpu)

# Run
./build/bin/hashium-qt
```

### Ubuntu/Debian

```bash
# Install dependencies
sudo apt-get update
sudo apt-get install -y build-essential cmake libevent-dev libboost-dev \
  libboost-filesystem-dev libboost-test-dev libsqlite3-dev \
  libminiupnpc-dev libnatpmp-dev libdb++-dev libzmq3-dev \
  qt6-base-dev qt6-tools-dev qt6-tools-dev-tools libqrencode-dev

# Clone and build
git clone https://github.com/Hylium-crypto/Hashium.git
cd Hashium
cmake -B build -DCMAKE_BUILD_TYPE=Release -DBUILD_GUI=ON -DBUILD_WALLET=ON
cmake --build build -j$(nproc)

# Run
./build/bin/hashium-qt
```

---

## 💼 First Time Setup

### 1. Create a Wallet
When you first open `hashium-qt`, it will create a default wallet.

### 2. Get Your Address
- **GUI**: Go to "Receive" tab
- **CLI**: `./hashium-cli getnewaddress`

### 3. Start Mining (Optional)
```bash
./hashium-cli generatetoaddress 1 "YOUR_ADDRESS"
```

### 4. Check Balance
- **GUI**: See "Overview" tab
- **CLI**: `./hashium-cli getbalance`

---

## ⚙️ Configuration

Create `hashium.conf` in your data directory:

**macOS**: `~/Library/Application Support/Hashium/hashium.conf`
**Linux**: `~/.hashium/hashium.conf`

```ini
# Enable RPC
server=1
rpcuser=hashium
rpcpassword=your_password_here

# Mining settings (optional)
gen=0
```

---

## 🆘 Troubleshooting

### "App is damaged" (macOS)
```bash
xattr -cr /path/to/Hashium-*-macOS
```

### Connection Issues
```bash
./hashiumd -reindex
```

### Reset Everything
```bash
rm -rf ~/Library/Application\ Support/Hashium  # macOS
rm -rf ~/.hashium                               # Linux
```

---

## 📞 Support

- **GitHub Issues**: https://github.com/Hylium-crypto/Hashium/issues
- **README**: https://github.com/Hylium-crypto/Hashium
