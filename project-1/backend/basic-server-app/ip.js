const os = require('os');

const interfaces = os.networkInterfaces();
let serverIpAddress = null;

for (const interfaceName of Object.keys(interfaces)) {
  for (const iface of interfaces[interfaceName]) {
    if (iface.family === 'IPv4' && !iface.internal) {
      serverIpAddress = iface.address;
      break;
    }
  }
  if (serverIpAddress) break;
}

console.log('Server IP address:', serverIpAddress);
