const fetchData = new Promise((resolve, reject) => {
    // Simulate fetching data asynchronously
    setTimeout(() => {
      const data = { name: 'John', age: 30 };
      if (data) {
        resolve(data);  // Success: Resolve the promise with data
      } else {
        reject('Data not available');  // Error: Reject the promise with an error message
      }
    }, 1000);
  });
  
  fetchData
    .then(result => {
      console.log('Fetched data:', result);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  