//STEP 1. import http module
const http = require('http');


//send html 
const fs = require('fs');

//STEP 2. create a new server instance using http module, each time coming a new web request and server response back to the same client   
const server =  http.createServer((request, response)=>{
    //response.end('Hello rom the server!'); //sending text response
    if(request.url===`/`){
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.end('Hello, World!');
    }else if(request.url===`/about`){
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.end('about page');
    }else if(request.url===`/welcome`){
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.end('welcome page');
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
