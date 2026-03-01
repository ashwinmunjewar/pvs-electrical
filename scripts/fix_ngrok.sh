#!/usr/bin/env bash
#
# Fix ngrok: kill any stuck ngrok, then start the dummy site.
# Ensures a clean state before starting (useful after crashes or "address in use").
#

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
cd "$PROJECT_ROOT"

echo "Stopping any existing ngrok processes..."
pkill -f ngrok 2>/dev/null || true
sleep 1

echo ""
exec "$SCRIPT_DIR/dummy-site.sh"
