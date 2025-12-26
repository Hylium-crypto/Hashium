#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")"

# Kill leftovers
pkill -f hashiumd || true

# Ensure build link exists
mkdir -p build/test/functional
ln -sf "$(pwd)/test/functional/feature_hashium_devnet_smoke.py" \
      "$(pwd)/build/test/functional/feature_hashium_devnet_smoke.py"

# Ensure config.ini link exists
ln -sf "$(pwd)/build/test/config.ini" test/config.ini

# Run
mkdir -p /Users/Apple/Desktop/hyl_ft
python3 test/functional/test_runner.py \
  --tmpdir=/Users/Apple/Desktop/hyl_ft \
  feature_hashium_devnet_smoke.py
