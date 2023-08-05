/**
 * @Callbackhell Using Promises and async/await, the code becomes more readable, easier to maintain, 
 * and avoids the callback hell problem.
 */


const fs = require('fs/promises');

async function readFiles() {
  try {
    const data1 = await fs.readFile('file1.txt', 'utf8');
    const data2 = await fs.readFile('file2.txt', 'utf8');
    const data3 = await fs.readFile('file3.txt', 'utf8');

    // Concatenate data from all files
    const result = data1 + data2 + data3;
    console.log('Result:', result);
  } catch (err) {
    console.error('Error reading files:', err);
  }
}

readFiles();
