
1. **Reading a File:**

```javascript
const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
    } else {
        console.log('File content:', data);
    }
});
```

2. **Writing to a File:**

```javascript
const fs = require('fs');

const content = 'This is some content to write to the file.';
fs.writeFile('newFile.txt', content, (err) => {
    if (err) {
        console.error('Error writing to file:', err);
    } else {
        console.log('File written successfully.');
    }
});
```

3. **Appending to a File:**

```javascript
const fs = require('fs');

const newContent = '\nThis content will be appended.';
fs.appendFile('newFile.txt', newContent, (err) => {
    if (err) {
        console.error('Error appending to file:', err);
    } else {
        console.log('Content appended successfully.');
    }
});
```

4. **Renaming a File:**

```javascript
const fs = require('fs');

fs.rename('oldFile.txt', 'newName.txt', (err) => {
    if (err) {
        console.error('Error renaming file:', err);
    } else {
        console.log('File renamed successfully.');
    }
});
```

5. **Deleting a File:**

```javascript
const fs = require('fs');

fs.unlink('fileToDelete.txt', (err) => {
    if (err) {
        console.error('Error deleting file:', err);
    } else {
        console.log('File deleted successfully.');
    }
});
```

6. **Checking if a File Exists:**

```javascript
const fs = require('fs');

fs.access('fileToCheck.txt', fs.constants.F_OK, (err) => {
    if (err) {
        console.error('File does not exist:', err);
    } else {
        console.log('File exists.');
    }
});
```

7. **Creating a Directory:**

```javascript
const fs = require('fs');

fs.mkdir('newDirectory', (err) => {
    if (err) {
        console.error('Error creating directory:', err);
    } else {
        console.log('Directory created successfully.');
    }
});
```

8. **Reading Contents of a Directory:**

```javascript
const fs = require('fs');

fs.readdir('directoryPath', (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
    } else {
        console.log('Files in the directory:', files);
    }
});
```
