# Changelog

All notable changes to Hashium will be documented in this file.

## [1.8.0] - 2025-12-29 - HARD FORK

> ⚠️ **MANDATORY UPGRADE** - All nodes must upgrade before block 15000!

### Added
- **Dark Gravity Wave (DGW)** difficulty adjustment algorithm
  - Per-block difficulty recalculation instead of every 2016 blocks
  - Uses 24-block rolling average
  - Maximum ±3x difficulty change per block
  - Activates at block 15000

### Fixed
- **Copyright typo** - "Hashi Nakamoto" → "Satoshi Nakamoto" (162 files)
- **Hash length bug** - assumeValid hash was 63 chars, now correctly 64 chars
- **Explorer.tsx lint error** - Removed impure Math.random() calls during render
- **Website build errors** - useMemo for stable block data

### Changed
- Block Explorer now uses deterministic mock data until API backend is ready

---

## [1.7.2] - 2025-12-29

### Added
- Block Explorer rewrite with search bar, live stats, recent blocks table
- assumeValid checkpoint at block 12000 for faster sync

### Fixed
- Website SEO meta tags

---

## [1.7.1] - 2025-12-27

### Fixed
- Windows build packaging (missing DLLs)
- Client version display corrected

---

## [1.7.0] - 2025-12-24

### Added
- Initial Hashium release
- GUI Wallet (hashium-qt)
- CLI tools (hashium-cli, hashiumd)
- Website with Paper Wallet, Mining Calculator, Address Validator
- Real DNS seed node (seed1.altcoinspool.cc)

### Known Issues (Fixed in 1.8.0)
- ❌ Copyright says "Hashi Nakamoto" instead of "Satoshi Nakamoto"
- ❌ Difficulty adjustment only every 2016 blocks (now DGW)
