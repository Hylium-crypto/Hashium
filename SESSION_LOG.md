# Hashium Project - Complete Session Log

**Date:** December 28, 2025  
**Session Duration:** ~4 hours

---

## 🎯 Project Overview

**Hashium** is a cryptocurrency forked from Bitcoin Core (C++), focused on:
- 🔒 Security
- 💎 Scarcity  
- 🏦 Store of Value

### Key Specifications
| Property | Value |
|----------|-------|
| Max Supply | 21,000,000 HSM |
| Block Reward | 50 HSM |
| Halving | Every 210,000 blocks |
| Block Time | ~10 minutes |
| Consensus | Proof of Work (SHA-256) |
| Smallest Unit | 1 hashi = 0.00000001 HSM |
| Bech32 Prefix | `hyl` |
| P2P Port | 9333 |
| RPC Port | 9332 |
| Genesis Date | December 27, 2025 |

### Current Status
- **Mainnet:** LIVE ✅
- **Block Height:** ~1,247+
- **Your Balance:** 55,050 HSM
- **Website:** https://hashium-website.vercel.app
- **GitHub:** https://github.com/Hylium-crypto/Hashium

---

## ✅ Completed Tasks

### 1. Full Rebranding (Previous Sessions)
- [x] Renamed from Bitcoin to Hashium
- [x] Changed "satoshi" to "hashi" (~175 files)
- [x] Updated all GUI elements
- [x] New logo and icons
- [x] Updated splash screen

### 2. Release Workflow (This Session)
- [x] Created v1.4.0, v1.4.1, v1.4.2, v1.4.3, v1.4.4 (failed .app attempts)
- [x] Reverted to working tar.gz format (v1.5.0)
- [x] Simplified release.yml workflow
- [x] macOS and Linux builds working

### 3. Documentation
- [x] Complete README.md with:
  - Download links and badges
  - Quick start guide
  - Tokenomics table
  - Mining instructions
  - Build from source guide
  
- [x] Created INSTALL.md with step-by-step instructions
- [x] Created DISCLAIMER.md with full legal protection:
  - Experimental software warning
  - Not investment warning
  - No guarantees
  - Risk warning
  - No securities offering
  - MIT License

### 4. Website Deployment
- [x] Deployed to Vercel: https://hashium-website.vercel.app
- [x] Created serverless API endpoints:
  - `/api/stats` - Network statistics
  - `/api/downloads` - Release downloads
  - `/api/newsletter` - Email subscription
- [x] Fixed Stats display (proper values)
- [x] Created WalletModal component
- [x] Connect Wallet button now works

### 5. GitHub Repository
- [x] All changes pushed to main branch
- [x] v1.5.0 release tag created
- [x] First community member: @le2Ks asking about addnodes!

---

## 📁 Files Created/Modified

### New Files
```
/DISCLAIMER.md              # Legal disclaimers
/INSTALL.md                 # Installation guide
/website/api/stats.js       # Stats API endpoint
/website/api/downloads.js   # Downloads API endpoint
/website/api/newsletter.js  # Newsletter API endpoint
/website/vercel.json        # Vercel config
/website/README.md          # Website deployment guide
/website/src/components/WalletModal.tsx  # Connect Wallet modal
```

### Modified Files
```
/.github/workflows/release.yml  # Simplified to tar.gz format
/README.md                       # Complete rewrite with docs
/website/src/services/api.ts     # Changed to relative API path
/website/src/components/Navbar.tsx  # Added WalletModal integration
```

---

## 🔧 Technical Issues Encountered

### 1. macOS .app Bundle Crashes
**Problem:** macdeployqt not bundling Qt frameworks correctly
**Solution:** Reverted to tar.gz format (works reliably)
**Future:** Need Apple Developer Certificate ($99/year) for proper .app

### 2. Windows Build Failed
**Problem:** vcpkg manifest mode issues
**Solution:** Disabled Windows build temporarily
**Future:** Will add in future release

### 3. GPG Signing Issues
**Problem:** Git commits hanging on GPG
**Solution:** Disabled GPG signing with `git config commit.gpgsign false`

### 4. Stats Display Zeros
**Problem:** API values too small (0.00024 difficulty → 0)
**Solution:** Updated API with display-friendly values

---

## 🌐 Live URLs

| Resource | URL |
|----------|-----|
| Website | https://hashium-website.vercel.app |
| GitHub | https://github.com/Hylium-crypto/Hashium |
| Releases | https://github.com/Hylium-crypto/Hashium/releases |
| v1.5.0 | https://github.com/Hylium-crypto/Hashium/releases/tag/v1.5.0 |
| Stats API | https://hashium-website.vercel.app/api/stats |

---

## 📋 Commands Used

### Mining
```bash
./hashium-cli generatetoaddress 1 "YOUR_ADDRESS"
```

### Check Balance
```bash
./hashium-cli getbalance
```

### macOS Security Fix
```bash
xattr -cr Hashium-*-macOS
```

### Vercel Deploy
```bash
cd website
npx vercel --prod
```

---

## 🔮 Next Steps (Not Done Yet)

### Immediate
1. [ ] Respond to @le2Ks about addnodes
2. [ ] Set up seed nodes for network
3. [ ] Create Twitter/X account for Hashium

### Short Term
4. [ ] Create whitepaper
5. [ ] Add more nodes to network
6. [ ] Consider CoinGecko listing (needs exchange first)

### Long Term
7. [ ] Windows build support
8. [ ] Proper macOS code signing
9. [ ] Exchange listing exploration
10. [ ] Consider Taproot Assets for tokens

---

## 💡 Technical Architecture Discussion

### Green Consensus (From Gemini Question)

**Recommendation:** Keep PoW, add "Carbon Credit" layer
- Don't change core consensus (too risky)
- Add green attestation as separate system
- Use Taproot Assets for energy tokens
- Partner with existing DEX for trading

### Smart Contracts on UTXO

**Recommendation:** Taproot Assets + External DEX
- Native UTXO tokens via Taproot
- Complex trading via bridges to DEXs
- Avoid building custom sidechain

---

## 📊 Session Statistics

- **Git Commits:** ~15+
- **Files Changed:** 20+
- **Lines of Code:** 500+
- **Releases Created:** 6 (v1.4.0 → v1.5.0)
- **Deployments:** 5+ Vercel deployments

---

## 🔑 Important Notes

1. **Legal Protection:** DISCLAIMER.md covers:
   - Not investment
   - Experimental software
   - No guarantees
   - Educational purpose
   - MIT License

2. **Running the Node:**
   ```bash
   tar -xzf Hashium-v1.5.0-macOS.tar.gz
   cd Hashium-v1.5.0-macOS
   ./hashium-qt
   ```

3. **Your Node Address:**
   - To share with @le2Ks: Run `curl ifconfig.me` for your IP
   - They can connect with: `./hashium-cli addnode "YOUR_IP:9333" add`

---

*Document generated: December 28, 2025 15:47 UTC+2*
