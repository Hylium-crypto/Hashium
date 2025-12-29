#!/bin/bash
# Hashium Cloudflare Tunnel Setup Script
# Exposes local Hashium RPC to internet for free

echo "🔧 Hashium Cloudflare Tunnel Setup"
echo "=================================="
echo ""

# Check if cloudflared is installed
if ! command -v cloudflared &> /dev/null; then
    echo "Installing cloudflared..."
    brew install cloudflared
fi

# Check if logged in
if ! cloudflared tunnel list &> /dev/null; then
    echo ""
    echo " Step 1: Login to Cloudflare"
    echo "A browser window will open. Login with your Cloudflare account."
    echo "(Create a free account at https://dash.cloudflare.com/sign-up if needed)"
    echo ""
    read -p "Press Enter to open browser..."
    cloudflared tunnel login
fi

# Create tunnel
TUNNEL_NAME="hashium-rpc"
echo ""
echo " Step 2: Creating tunnel '$TUNNEL_NAME'..."

# Check if tunnel exists
if cloudflared tunnel list | grep -q "$TUNNEL_NAME"; then
    echo "Tunnel '$TUNNEL_NAME' already exists!"
else
    cloudflared tunnel create $TUNNEL_NAME
fi

# Get tunnel ID
TUNNEL_ID=$(cloudflared tunnel list | grep "$TUNNEL_NAME" | awk '{print $1}')
echo "Tunnel ID: $TUNNEL_ID"

# Create config
CONFIG_DIR="$HOME/.cloudflared"
mkdir -p "$CONFIG_DIR"

cat > "$CONFIG_DIR/config-hashium.yml" << EOF
tunnel: $TUNNEL_ID
credentials-file: $CONFIG_DIR/$TUNNEL_ID.json

ingress:
  - hostname: hashium-rpc.YOUR_DOMAIN.com
    service: http://localhost:9332
  - service: http_status:404
EOF

echo ""
echo " Config created at: $CONFIG_DIR/config-hashium.yml"
echo ""
echo "  IMPORTANT: Edit the config file and replace:"
echo "    'hashium-rpc.YOUR_DOMAIN.com' with your actual domain"
echo ""
echo " Next steps:"
echo "1. Add a domain to Cloudflare (free)"
echo "2. Run: cloudflared tunnel route dns $TUNNEL_NAME hashium-rpc.yourdomain.com"
echo "3. Run: cloudflared tunnel --config $CONFIG_DIR/config-hashium.yml run"
echo ""
echo "Or use Quick Tunnel (no domain needed):"
echo "  cloudflared tunnel --url http://localhost:9332"
