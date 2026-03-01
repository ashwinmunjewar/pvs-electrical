#!/usr/bin/env node
/**
 * Expose localhost to a public URL (used by scripts/dummy-site.sh).
 * Can also be run alone after `npm run dev`: npm run tunnel
 */
const port = process.env.PORT || 3000;

async function main() {
  try {
    const lt = require('localtunnel');
    const tunnel = await lt({ port });
    console.log('\n  Public URL (share this link):\n');
    console.log('  ', tunnel.url);
    console.log('\n  Keep this process running. Press Ctrl+C to stop the tunnel.\n');
    tunnel.on('close', () => process.exit(0));
  } catch (err) {
    console.error('Tunnel error:', err.message);
    process.exit(1);
  }
}

main();
