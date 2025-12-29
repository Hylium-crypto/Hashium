# Hashium Mobile Wallet

React Native mobile wallet for iOS and Android.

## Features

- [x] Wallet creation/import
- [x] Send/Receive HSM
- [x] QR code scanning
- [x] Transaction history
- [ ] Biometric auth
- [ ] Multiple wallets

## Development

### Requirements
- Node.js 18+
- React Native CLI
- Xcode (iOS) / Android Studio (Android)

### Setup

```bash
npm install
cd ios && pod install && cd ..

# iOS
npm run ios

# Android
npm run android
```

## Build

```bash
# iOS
npm run build:ios

# Android
npm run build:android
```

## Key Libraries

- `bitcoinjs-lib` - Transaction signing
- `bip39` - Mnemonic generation
- `react-native-camera` - QR scanning
- `@react-navigation` - Navigation

## Security

- Private keys stored in device keychain
- Never transmitted to servers
- Mnemonic backup required
