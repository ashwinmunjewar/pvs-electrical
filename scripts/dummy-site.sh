#!/usr/bin/env bash
#
# One-command dummy site: starts the Next.js app and ngrok tunnel, prints the public URL.
# Run from project root: ./scripts/dummy-site.sh  or  npm run dummy-site
# Press Ctrl+C to stop both the tunnel and the app.
#
# Requires: NGROK_AUTHTOKEN (or NGROK_AUTH_TOKEN). Get one at:
#   https://dashboard.ngrok.com/get-started/your-authtoken
#

set -e
SCRIPT_SOURCE="${BASH_SOURCE[0]}"
while [ -h "$SCRIPT_SOURCE" ]; do
  SCRIPT_DIR="$(cd -P "$(dirname "$SCRIPT_SOURCE")" && pwd)"
  SCRIPT_SOURCE="$(readlink "$SCRIPT_SOURCE")"
  [[ $SCRIPT_SOURCE != /* ]] && SCRIPT_SOURCE="$SCRIPT_DIR/$SCRIPT_SOURCE"
done
SCRIPT_DIR="$(cd -P "$(dirname "$SCRIPT_SOURCE")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
cd "$PROJECT_ROOT"

# Support both env var names (reference script used NGROK_AUTH_TOKEN)
if [ -n "$NGROK_AUTH_TOKEN" ] && [ -z "$NGROK_AUTHTOKEN" ]; then
  export NGROK_AUTHTOKEN="$NGROK_AUTH_TOKEN"
fi

export PORT="${PORT:-3000}"
DEV_PID=""

cleanup() {
  if [[ -n "$DEV_PID" ]] && kill -0 "$DEV_PID" 2>/dev/null; then
    echo "Stopping dev server (PID $DEV_PID)..."
    kill "$DEV_PID" 2>/dev/null || true
    wait "$DEV_PID" 2>/dev/null || true
  fi
  exit 0
}
trap cleanup SIGINT SIGTERM

if [ -z "$NGROK_AUTHTOKEN" ]; then
  echo "⚠️  NGROK_AUTHTOKEN not set. Ngrok will not start."
  echo "   To get a public URL, set: export NGROK_AUTHTOKEN='your_token'"
  echo "   Get your token from: https://dashboard.ngrok.com/get-started/your-authtoken"
  echo ""
  read -p "Continue with dev server only (no tunnel)? [y/N]: " confirm
  if [[ ! "$confirm" =~ ^[yY] ]]; then
    exit 1
  fi
  echo "Starting dev server on http://localhost:$PORT (no tunnel)."
  npm run dev
  exit 0
fi

echo "🚀 Starting dummy site (Next.js + ngrok)..."
echo ""
echo "Starting dev server on port $PORT..."
npm run dev &
DEV_PID=$!

echo "Waiting for app to be ready..."
for i in {1..30}; do
  if curl -s -o /dev/null -w "%{http_code}" "http://127.0.0.1:$PORT" 2>/dev/null | grep -q '200\|304'; then
    break
  fi
  sleep 1
done

echo ""
echo "Starting ngrok tunnel..."
echo ""
node scripts/tunnel-ngrok.js
