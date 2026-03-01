#!/usr/bin/env bash
#
# Kill any running ngrok processes (tunnel or agent).
# Use this if a previous ngrok tunnel is stuck or you see "address already in use".
#

echo "Stopping ngrok processes..."
pkill -f ngrok 2>/dev/null && echo "Done. Ngrok processes stopped." || echo "No ngrok processes found."
