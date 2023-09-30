const mysql = require("mysql2");
const dotenv = require('dotenv');
const path = require('path');

// loading config file
dotenv.config({ path: path.join(__dirname, '..', 'config.env') });

const SQL_CONNECTION = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
});


if(SQL_CONNECTION){
    console.log({message: 'database connection successful!', status: 'connected'});
  }else{
    console.log({message: 'database connection failed!', status: 'not connected'});
  }

module.exports = SQL_CONNECTION;