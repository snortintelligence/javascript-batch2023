// Example 1: Callback for Asynchronous Operation
function fetchDataFromServer(callback) {
  // Simulating a network request with setTimeout
  setTimeout(function() {
    const data = { message: "Data fetched successfully" };
    callback(data); // Execute the callback with the fetched data
  }, 1000);
}

// creating a callback function
function processData(data) {
  console.log("Processing data:", data.message);
}

fetchDataFromServer(processData); // Pass processData as a callback

