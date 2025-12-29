# Hashium: A Peer-to-Peer Electronic Cash System with Adaptive Difficulty

**Version 1.0 Draft - December 2025**

---

## Abstract

Hashium is an experimental cryptocurrency based on the Bitcoin protocol with key enhancements for network stability. The primary innovation is the implementation of Dark Gravity Wave (DGW) difficulty adjustment, which responds to hashrate changes every block rather than every 2016 blocks, making the network more resilient to mining fluctuations.

---

## 1. Introduction

Bitcoin's difficulty adjustment algorithm works well for large, stable networks but can cause significant block time variance in smaller networks with fluctuating hashrates. Hashium addresses this by implementing a per-block difficulty adjustment algorithm while maintaining Bitcoin's core security model.

---

## 2. Technical Specifications

| Parameter | Value |
|-----------|-------|
| Algorithm | SHA-256 (Proof of Work) |
| Maximum Supply | 21,000,000 HSM |
| Block Reward | 50 HSM (halving every 210,000 blocks) |
| Target Block Time | 10 minutes |
| Difficulty Adjustment | Dark Gravity Wave v3 (per-block) |
| Address Prefix | "K" (Legacy), "hyl1" (Bech32) |
| P2P Port | 9333 |
| RPC Port | 9332 |

---

## 3. Dark Gravity Wave (DGW)

### 3.1 Problem Statement

Traditional Bitcoin difficulty adjustment occurs every 2016 blocks (~2 weeks). In small networks, sudden hashrate changes cause:

- Extremely fast blocks when miners join
- Extremely slow blocks when miners leave
- Long periods of instability before adjustment

### 3.2 Solution

DGW calculates difficulty using a rolling average of the last 24 blocks:

```
1. Calculate actual time for last 24 blocks
2. Calculate target time (24 × 600 seconds = 4 hours)
3. Adjust difficulty: new_difficulty = old_difficulty × (target_time / actual_time)
4. Limit change to maximum ±3x per block
```

### 3.3 Benefits

- Immediate response to hashrate changes
- More stable block times
- Protection against "difficulty bomb" attacks
- Better experience for small networks

---

## 4. Network Architecture

### 4.1 Node Discovery

Hashium uses DNS seed nodes for initial peer discovery:
- seed1.altcoinspool.cc

### 4.2 Block Validation

All blocks are validated using standard Bitcoin consensus rules with the addition of DGW difficulty checks after the activation height.

---

## 5. Addresses

Hashium supports multiple address formats:

| Type | Prefix | Example |
|------|--------|---------|
| Legacy (P2PKH) | K | Kx...abc |
| Script (P2SH) | N | Nx...def |
| SegWit (Bech32) | hyl1 | hyl1q...xyz |

---

## 6. Tokenomics

| Milestone | Block | Reward | Cumulative Supply |
|-----------|-------|--------|-------------------|
| Genesis | 0 | 50 HSM | 50 |
| Halving 1 | 210,000 | 25 HSM | 10,500,000 |
| Halving 2 | 420,000 | 12.5 HSM | 15,750,000 |
| Halving 3 | 630,000 | 6.25 HSM | 18,375,000 |
| Final | ~6,930,000 | 0 | 21,000,000 |

---

## 7. Consensus Rules

### 7.1 Block Validation
- Valid SHA-256 proof of work
- Correct difficulty per DGW algorithm (after activation)
- Valid transactions with correct signatures
- Block size limit: 4 MB (SegWit weight)

### 7.2 Hard Fork History

| Version | Block | Change |
|---------|-------|--------|
| 1.8.0 | 15000 | DGW activation |

---

## 8. Security Considerations

### 8.1 51% Attacks
As with all PoW cryptocurrencies, Hashium is vulnerable to 51% attacks. The DGW algorithm provides some protection by limiting difficulty drops.

### 8.2 Time Warp Attacks
DGW's short averaging window provides resilience against time manipulation attacks.

---

## 9. Future Development

- [ ] Mining pool infrastructure
- [ ] Block Explorer API
- [ ] Mobile wallet
- [ ] Hardware wallet support

---

## 10. Conclusion

Hashium demonstrates that adaptive difficulty adjustment can improve cryptocurrency network stability, particularly for smaller networks. The DGW implementation provides a practical solution to the block time variance problem while maintaining the security properties of the Bitcoin protocol.

---

## References

1. Nakamoto, S. "Bitcoin: A Peer-to-Peer Electronic Cash System" (2008)
2. Duffield, E. "Dark Gravity Wave v3" - Dash Core Documentation
3. Hashium GitHub: https://github.com/Hylium-crypto/Hashium

---

**Disclaimer:** This is an experimental project for educational purposes. Not financial advice.
