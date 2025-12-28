# Hashium

**🔒 Security • 💎 Scarcity • 🏦 Store of Value**

[![Release](https://img.shields.io/github/v/release/Hylium-crypto/Hashium?label=Download)](https://github.com/Hylium-crypto/Hashium/releases/latest)
[![CI](https://github.com/Hylium-crypto/Hashium/actions/workflows/ci.yml/badge.svg)](https://github.com/Hylium-crypto/Hashium/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Hashium is a next-generation cryptocurrency built on the battle-tested Bitcoin Core codebase, 
designed as a secure store of value with a fixed supply of **21 million coins**.

## 📥 Download

**[Download Latest Release](https://github.com/Hylium-crypto/Hashium/releases/latest)**

| Platform | Binary |
|----------|--------|
| macOS (Apple Silicon) | `hashium-qt` + `hashiumd` |
| Linux (x86_64) | `hashium-qt` + `hashiumd` |

## Core Principles

| Principle | Description |
|-----------|-------------|
| 🔒 **Security** | Built on Bitcoin Core, the most scrutinized codebase in crypto |
| 💎 **Scarcity** | Fixed supply of 21,000,000 HSM |
| 🏦 **Store of Value** | Sound money principles: hard cap, halving schedule, PoW |

## Tokenomics

- **Max Supply:** 21,000,000 HSM
- **Block Reward:** 50 HSM (halves every 210,000 blocks)
- **Block Time:** ~10 minutes
- **Consensus:** Proof of Work (SHA-256)
- **Smallest Unit:** 1 hashi = 0.00000001 HSM

## Quick Start

```bash
# Download from releases
# https://github.com/Hylium-crypto/Hashium/releases/latest

# GUI Wallet (Recommended)
./hashium-qt

# Or Command Line
./hashiumd -daemon
./hashium-cli getblockchaininfo
./hashium-cli getnewaddress
```

What is Hashium Core?
---------------------

Hashium Core connects to the Hashium peer-to-peer network to download and fully
validate blocks and transactions. It also includes a wallet and graphical user
interface.

Network parameters (Hashium):
- P2P/RPC ports: mainnet 9333/9332
- Message start bytes: mainnet f3c2e1b0
- Bech32 HRP: `hyl` (mainnet)
- Base58 prefixes: P2PKH 38, P2SH 53, WIF 176

## 🌐 Network Status

**✅ MAINNET LIVE** - Genesis block mined December 27, 2025.


## Documentation

| Document | Description |
|----------|-------------|
| [Whitepaper](doc/WHITEPAPER.md) | Technical design and monetary policy |
| [Roadmap](ROADMAP.md) | Development phases and milestones |
| [Security Policy](SECURITY.md) | Vulnerability reporting guidelines |
| [Testing Guide](doc/testing.md) | How to run tests |
| [Consensus Rules](doc/consensus.md) | Detailed consensus specification |
| [Build Guides](doc/) | Platform-specific build instructions |

Further information about Hashium Core is available in the [doc folder](/doc).

License
-------

Hashium Core is released under the terms of the MIT license. See [COPYING](COPYING) for more
information or see https://opensource.org/license/MIT.

Development Process
-------------------

The `master` branch is regularly built (see `doc/build-*.md` for instructions) and tested, but it is not guaranteed to be
completely stable. [Tags](https://github.com/hashium/hashium/tags) are created
regularly from release branches to indicate new official, stable release versions of Hashium Core.

The https://github.com/hashium-core/gui repository is used exclusively for the
development of the GUI. Its master branch is identical in all monotree
repositories. Release branches and tags do not exist, so please do not fork
that repository unless it is for development reasons.

The contribution workflow is described in [CONTRIBUTING.md](CONTRIBUTING.md)
and useful hints for developers can be found in [doc/developer-notes.md](doc/developer-notes.md).

Testing
-------

Testing and code review is the bottleneck for development; we get more pull
requests than we can review and test on short notice. Please be patient and help out by testing
other people's pull requests, and remember this is a security-critical project where any mistake might cost people
lots of money.

### Automated Testing

Developers are strongly encouraged to write [unit tests](src/test/README.md) for new code, and to
submit new unit tests for old code. Unit tests can be compiled and run
(assuming they weren't disabled during the generation of the build system) with: `ctest`. Further details on running
and extending unit tests can be found in [/src/test/README.md](/src/test/README.md).

There are also [regression and integration tests](/test), written
in Python.
These tests can be run (if the [test dependencies](/test) are installed) with: `build/test/functional/test_runner.py`
(assuming `build` is your build directory).

The CI (Continuous Integration) systems make sure that every pull request is tested on Windows, Linux, and macOS.
The CI must pass on all commits before merge to avoid unrelated CI failures on new pull requests.

### Manual Quality Assurance (QA) Testing

Changes should be tested by somebody other than the developer who wrote the
code. This is especially important for large or high-risk changes. It is useful
to add a test plan to the pull request description if testing the changes is
not straightforward.

Translations
------------

Changes to translations as well as new translations can be submitted to
[Hashium Core's Transifex page](https://explore.transifex.com/hashium/hashium/).

Translations are periodically pulled from Transifex and merged into the git repository. See the
[translation process](doc/translation_process.md) for details on how this works.

**Important**: We do not accept translation changes as GitHub pull requests because the next
pull from Transifex would automatically overwrite them again.
# Initial Hashium Protocol Release
