//STEP 1. import http module
const http = require('http');


//send html 
const fs = require('fs');

//reading json data file
const jsonData = fs.readFileSync('./json/products.json', 'utf8');

//convert json data into javascript object
const data = JSON.parse(jsonData);

//STEP 2. create a new server instance using http module, each time coming a new web request and server response back to the same client   
const server =  http.createServer((request, response)=>{
 
    let path = request.url.toLocaleLowerCase();
    if(path===`/`){
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.end('welcome page');
    }else if(path===`/products`){
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(data));
        console.log(data);
    }else if(path===`/contact`){
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.end('contact page');
    }else if(path===`/about`){
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.end('about page');
    }else{
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.end('Page Not Found!');
    }
    console.log('server : new request received!');
});

//STEP 3. start the server with at least two parameters
server.listen(3000, 'localhost',()=>{
    console.log('Server started at http://localhost:3000');
});
