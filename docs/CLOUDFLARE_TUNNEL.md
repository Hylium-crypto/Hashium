# Cloudflare Tunnel for Hashium RPC

Expose your local Hashium node to the internet **for free** using Cloudflare Tunnel.

## Quick Start (Easiest!)

### 1. Make sure hashiumd is running with RPC
```bash
./hashiumd -rpcuser=hashium -rpcpassword=yourpassword -rpcallowip=127.0.0.1 -server=1
```

### 2. Run Quick Tunnel (no account needed!)
```bash
cloudflared tunnel --url http://localhost:9332
```

You'll get a URL like: `https://random-words.trycloudflare.com`

### 3. Add to Vercel
```
HASHIUM_RPC_HOST = random-words.trycloudflare.com
HASHIUM_RPC_PORT = 443
```

⚠️ **Note:** Quick tunnel URL changes each time you restart. For permanent URL, use full setup below.

---

## Full Setup (Permanent URL)

### Requirements
- Cloudflare account (free, no credit card)
- A domain (you can get free .tk/.ml domains or use existing)

### Steps

1. **Install cloudflared**
```bash
brew install cloudflared
```

2. **Login**
```bash
cloudflared tunnel login
```

3. **Create tunnel**
```bash
cloudflared tunnel create hashium-rpc
```

4. **Add DNS route**
```bash
cloudflared tunnel route dns hashium-rpc rpc.yourdomain.com
```

5. **Run tunnel**
```bash
cloudflared tunnel run hashium-rpc --url http://localhost:9332
```

---

## Vercel Environment Variables

After tunnel is running, add to Vercel:

| Variable | Value |
|----------|-------|
| HASHIUM_RPC_HOST | rpc.yourdomain.com (or trycloudflare URL) |
| HASHIUM_RPC_PORT | 443 |
| HASHIUM_RPC_USER | hashium |
| HASHIUM_RPC_PASS | yourpassword |

---

## Run as Background Service (macOS)

```bash
brew services start cloudflared
```

Or create a launch agent for automatic startup.
