/**
 * @ClosuresCallbacks :
 *  
 * Closures are commonly used in callback functions to maintain data and state across asynchronous operations.
 */
function fetchProductsApi(url, callback){
       // Simulate asynchronous data fetching using setTimeout for 5 seconds
        setTimeout(() => {
            fetch(url)
            .then((response)=>response.json())
            .then((data)=>{
                 // Call the callback function and pass the fetched data
                callback(data);
            }).catch((error)=>{
                 // Handle errors, e.g., network error or invalid response
                console.error('Error fetching api data : ',error)});
        }, 5000); // Simulate asynchronous data fetching using setTimeout
}

// Function getProductList that uses Closure
function getProductList(){
    let processedData = []; // Empty array to store processed data
    // Nested function handleData
    function handleData(data) {
        processedData = [...data];
        console.log('Processed data:', processedData);
      }
      // Call fetchProductsApi with a callback function (handleData) to handle the fetched data
    fetchProductsApi('https://fakestoreapi.com/products',handleData);
}
// Call the getProductList function to initiate the data fetching process
getProductList();