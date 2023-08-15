// Use different ways to create a sql connection and check the connection created or not?
/**
 * Step 1. Create a new database user or use default user: root & password: root
 * Step 2. Create a database table like Products
 * Step 3. add required dependencies in node js app to write connection code
 *
 */

// Using mysql2 Package with Callbacks
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "world"
});

function getConnection(){
    connection.connect((err) => {
        if (err) {
          console.error(`Connection Failed >`, err);
        } else {
          console.log("Connection Success.");
          // Perform SELECT query
          connection.query(`SELECT * FROM products`, (err, results, fields) => {
            if (err) {
              console.log(`Error while Fetching :: `, err);
            } else {
              console.log(`Query results[] : `, results);
            }
          });
          connection.end();
        }
      }); //connecting
}

getConnection();