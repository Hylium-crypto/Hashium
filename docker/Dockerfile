# Hashium Node Docker Image
# For running a full node on VPS

FROM ubuntu:22.04

LABEL maintainer="Hashium Community"
LABEL description="Hashium Full Node"
LABEL version="1.8.0"

# Install dependencies
RUN apt-get update && apt-get install -y \
    wget \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

# Create hashium user
RUN useradd -m -s /bin/bash hashium

# Create data directory
RUN mkdir -p /home/hashium/.hashium && chown -R hashium:hashium /home/hashium

# Download pre-built binaries (will be updated when release is ready)
# For now, placeholder - replace with actual release URL
ARG HASHIUM_VERSION=1.8.0
ARG HASHIUM_RELEASE_URL=https://github.com/Hylium-crypto/Hashium/releases/download/v${HASHIUM_VERSION}/Hashium-v${HASHIUM_VERSION}-Linux.tar.gz

# Download and extract (when release is available)
# RUN wget -qO- ${HASHIUM_RELEASE_URL} | tar xvz -C /usr/local/bin/ --strip-components=1

# For now, copy local binaries (build first)
COPY --chown=hashium:hashium hashiumd /usr/local/bin/
COPY --chown=hashium:hashium hashium-cli /usr/local/bin/

# Make executable
RUN chmod +x /usr/local/bin/hashiumd /usr/local/bin/hashium-cli

# Switch to hashium user
USER hashium
WORKDIR /home/hashium

# Expose ports
# P2P port
EXPOSE 9333
# RPC port
EXPOSE 9332

# Data volume
VOLUME ["/home/hashium/.hashium"]

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=60s --retries=3 \
    CMD hashium-cli -rpcuser=$RPC_USER -rpcpassword=$RPC_PASS getblockchaininfo || exit 1

# Default command
ENTRYPOINT ["hashiumd"]
CMD ["-printtoconsole", "-rpcallowip=0.0.0.0/0", "-rpcbind=0.0.0.0"]
