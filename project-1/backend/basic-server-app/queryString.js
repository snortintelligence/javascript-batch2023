//STEP 1. import http module
const http = require('http');
const url = require('node:url');

//send html 
const fs = require('fs');

//STEP 2. create a new server instance using http module, each time coming a new web request and server response back to the same client   
const server =  http.createServer((request, response)=>{
    //response.end('Hello rom the server!'); //sending text response
    
    const _url = url.parse(request.url, true);
    console.log(_url);

    const {pathname ,path, query} = _url;

    console.log({path, query});

    if(pathname===`/`){
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.end('Home Page');
    }else if(pathname===`/product`){
        if(!path){
            response.writeHead(200, { 'Content-Type': 'text/plain' });
            response.end('Product page');
        }else{
            response.writeHead(200, { 'Content-Type': 'text/plain' });
            response.end(`path variables : ${path}` );
        }
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
