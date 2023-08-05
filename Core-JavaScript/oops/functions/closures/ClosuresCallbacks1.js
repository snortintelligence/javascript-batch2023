/**
 * @ClosuresCallbacks :
 *  
 * Closures are commonly used in callback functions to maintain data and state across asynchronous operations.
 */
function fetchData(url, callback) {
    // Simulate asynchronous data fetching
    setTimeout(() => {
      const data = { name: 'John', age: 30 };
      callback(data);
    }, 3000);
  }
  
  function processData() {
    let processedData = {};
  
    function handleData(data) {
      processedData = { ...data, isAdmin: true };
      console.log('Processed data:', processedData);
    }
  
    fetchData('https://example.com/data', handleData);
  }
  
  processData();
  