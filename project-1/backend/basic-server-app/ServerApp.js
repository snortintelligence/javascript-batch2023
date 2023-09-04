//STEP 1. import http module
const http = require('http');


//send html 
const fs = require('fs');

const welcomePage = fs.readFileSync('./welcome.html', 'utf8');
const aboutPage = fs.readFileSync('./about.html', 'utf8');

//STEP 2. create a new server instance using http module, each time coming a new web request and server response back to the same client   
const server =  http.createServer((request, response)=>{
    //response.end('Hello rom the server!'); //sending text response
    //response.end('<h1>Welcome</h1>'); //sending html response
    response.end(aboutPage); //sending html response
    // response.end(JSON.stringify({id:1, name:'Aman'}));//send object as a response
    console.log('server : new request received!');
});

//STEP 3. start the server with at least two parameters
server.listen(3000, 'localhost',()=>{
    console.log('Server started at http://localhost:3000');
});
