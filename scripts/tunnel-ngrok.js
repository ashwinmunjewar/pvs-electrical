#!/usr/bin/env node
/**
 * Expose localhost via ngrok (used by dummy-site.sh).
 * Requires NGROK_AUTHTOKEN. Get one at: https://dashboard.ngrok.com/get-started/your-authtoken
 */
const ngrok = require('@ngrok/ngrok');
const port = Number(process.env.PORT) || 3000;

(async function () {
  if (!process.env.NGROK_AUTHTOKEN) {
    console.error('NGROK_AUTHTOKEN is not set. Get your token from: https://dashboard.ngrok.com/get-started/your-authtoken');
    process.exit(1);
  }
  try {
    const listener = await ngrok.forward({ addr: port, authtoken_from_env: true });
    console.log('\n  Public URL (share this link):\n');
    console.log('  ', listener.url());
    console.log('\n  Keep this process running. Press Ctrl+C to stop the tunnel.\n');
    process.stdin.resume();
  } catch (err) {
    console.error('Ngrok error:', err.message);
    process.exit(1);
  }
})();
