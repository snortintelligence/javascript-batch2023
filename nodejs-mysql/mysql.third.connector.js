Sure, here are a few examples of how to use the `os` module in Node.js to retrieve information about the operating system:

1. **Getting OS Platform:**
   This example demonstrates how to get the platform (like 'darwin' for macOS, 'win32' for Windows) of the operating system.

```javascript
const os = require('os');

console.log('Operating System Platform:', os.platform());
```

2. **Getting OS Architecture:**
   This example shows how to get the architecture (like 'x64', 'arm', etc.) of the operating system.

```javascript
const os = require('os');

console.log('Operating System Architecture:', os.arch());
```

3. **Getting CPU Information:**
   This example illustrates how to get information about the CPU cores and their details.

```javascript
const os = require('os');

const cpus = os.cpus();
console.log('Number of CPU Cores:', cpus.length);

cpus.forEach((cpu, index) => {
  console.log(`CPU Core ${index + 1}:`);
  console.log(`  Model: ${cpu.model}`);
  console.log(`  Speed: ${cpu.speed} MHz`);
});
```

4. **Getting Total Memory and Free Memory:**
   This example demonstrates how to get the total memory and free memory available on the system.

```javascript
const os = require('os');

const totalMemory = os.totalmem();
const freeMemory = os.freemem();

console.log(`Total Memory: ${totalMemory} bytes`);
console.log(`Free Memory: ${freeMemory} bytes`);
```

5. **Getting User and Home Directory:**
   This example shows how to get the current user's information and home directory.

```javascript
const os = require('os');

console.log('Current User:', os.userInfo().username);
console.log('Home Directory:', os.homedir());
```
