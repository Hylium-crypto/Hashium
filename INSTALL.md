# Hashium Installation Guide

Quick start and build instructions for Hashium Core.

## Quick Start

### Prerequisites

- **C++ Compiler**: GCC 10+ or Clang 15+
- **CMake**: 3.22 or later
- **Build dependencies**: See platform-specific guides below

### Build from Source

```bash
# Clone the repository
git clone https://github.com/Panagiotis012/Hashium.git
cd Hashium

# Configure and build
cmake -B build
cmake --build build -j$(nproc)

# Run tests (optional but recommended)
cd build && ctest --output-on-failure

# Install (optional)
sudo cmake --install build
```

### Run Hashium

```bash
# Start the daemon
./build/src/hashiumd

# Use the CLI
./build/src/hashium-cli getblockchaininfo
```

## Detailed Build Instructions

For platform-specific instructions, see:

| Platform | Guide |
|----------|-------|
| Linux (Ubuntu/Debian) | [doc/build-unix.md](doc/build-unix.md) |
| macOS | [doc/build-osx.md](doc/build-osx.md) |
| Windows (MSVC) | [doc/build-windows-msvc.md](doc/build-windows-msvc.md) |
| Windows (MinGW) | [doc/build-windows.md](doc/build-windows.md) |
| FreeBSD | [doc/build-freebsd.md](doc/build-freebsd.md) |
| NetBSD | [doc/build-netbsd.md](doc/build-netbsd.md) |
| OpenBSD | [doc/build-openbsd.md](doc/build-openbsd.md) |

## Configuration

After installation, configure Hashium by editing `~/.hashium/hashium.conf`:

```ini
# Basic configuration
server=1
daemon=1
rpcuser=your-username
rpcpassword=your-secure-password

# Network (default is mainnet)
# testnet=1    # Use testnet
# regtest=1    # Use regtest for development
```

See [doc/hashium-conf.md](doc/hashium-conf.md) for all configuration options.

## Verify Installation

```bash
# Check version
hashiumd --version

# Check network connectivity
hashium-cli getpeerinfo
```

## Troubleshooting

- **Build fails**: Ensure all dependencies are installed per your platform guide
- **Connection issues**: Check firewall allows port 9333 (mainnet)
- **Other issues**: See [GitHub Issues](https://github.com/Panagiotis012/Hashium/issues)

---

For more information, see the [documentation](doc/) directory.
