/**
 * Solution for @callbackhell consider an example of making multiple API calls and processing their results using Promises and async/await.
 * avoid @callback   
 * 
 */

const axios = require('axios');

const productsApi = `https://fakestoreapi.com/products`
const cartApi = `https://fakestoreapi.com/carts`
const usersApi = `https://fakestoreapi.com/users`


// Function to fetch data from an API and return a Promise
function fetchDataFromApi(api) {
    return axios.get(api).then((response) => response.data);
}

// Function to process the data from all APIs using async/await
async function processData() {
    try {
        const data1 = await fetchDataFromApi(productsApi);
        const data2 = await fetchDataFromApi(cartApi);
        const data3 = await fetchDataFromApi(usersApi);

        const result = [].concat(data1,data2,data3);
        console.log(result);
    } catch (error) {
        console.error(error);
        throw error;
    }
}

processData();