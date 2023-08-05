/**
 * @Callback Hell Example
 * consider an example of making multiple API calls and processing their results using callbacks
 * 
 */

//apis list
const productsApi = `https://fakestoreapi.com/products`
const cartApi = `https://fakestoreapi.com/carts`
const usersApi = `https://fakestoreapi.com/users`

//use axios
const axios = require('axios');

function getProducts(callback) {
    setTimeout(() => {
        axios.get(productsApi)
            .then(response => {
                callback(null, response.data[1]);
            }).catch((error) => callback(error));
    }, 500);
}

function getCart(callback) {
    setTimeout(() => {
        axios.get(cartApi)
            .then(response => {
                callback(null, response.data);
            }).catch((error) => callback(error));
    }, 500);
}

function getUsers(callback) {
    setTimeout(() => {
        axios.get(usersApi)
            .then(response => {
                callback(null, response.data);
            }).catch((error) => callback(error));
    }, 500);
}

// defining a function processData
function processData(callback) {
    let data1=[], data2=[], data3 = [];
  
    // Get data from API 1
    getProducts((err1, result1) => {
      if (err1) {
        callback(err1);
        return;
      }
      data1 = result1; // Assuming result1 is an array
  
      // Get data from API 2
      getCart((err2, result2) => {
        if (err2) {
          callback(err2);
          return;
        }
        data2 = result2; // Assuming result2 is an array
  
        // Get data from API 3
        getUsers((err3, result3) => {
          if (err3) {
            callback(err3);
            return;
          }
          data3 = result3; // Assuming result3 is an array
  
          // Concatenate the arrays
          const results = [].concat(data1, data2, data3);
          callback(null, results);
        });
      });
    });
  }
  

// calling the function processData
processData((err, result) => {
    if (err) {
        console.log('Error while calling apis :: ', err);
        return;
    }

    console.log('Result:', JSON.stringify(result));
})