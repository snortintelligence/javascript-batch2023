/**
 *  @Callbackhell occurs when you have multiple nested asynchronous operations that 
 *  depend on each other's results, leading to deeply nested callback functions. 
 *  Suppose we have three files: "file1.txt", "file2.txt", and "file3.txt", and we want to read their contents and 
 *  concatenate them into a single string. Each file read operation is asynchronous and requires a callback.
 *   Below is an example of callback hell:
 */

const fs = require('fs');

// Read file1.txt
fs.readFile('file1.txt', 'utf8', (err, data1) => {
  if (err) {
    console.error('Error reading file1:', err);
    return;
  }

  // Read file2.txt
  fs.readFile('file2.txt', 'utf8', (err, data2) => {
    if (err) {
      console.error('Error reading file2:', err);
      return;
    }

    // Read file3.txt
    fs.readFile('file3.txt', 'utf8', (err, data3) => {
      if (err) {
        console.error('Error reading file3:', err);
        return;
      }

      // Concatenate data from all files
      const result = data1 + data2 + data3;
      console.log('Result:', result);
    });
  });
});
