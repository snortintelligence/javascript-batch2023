// Use different ways to create a sql connection and check the connection created or not?
/**
 * Step 1. Create a new database user or use default user: root & password: root
 * Step 2. Create a database table like Products
 * Step 3. add required dependencies in node js app to write connection code
 *
 */
// Using mysql2 Package with Promises
const mysql = require("mysql2/promise");

async function getConnection(){
    try {
        const connection = await mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "root",
            database: "world"
        });
        console.log('Database Connection : Success!');
        return connection;
    } catch (error) {
        console.error('Database Connection : Failed!');
        console.log(error);
    }
}//end of getConnection()

async function createNewProduct(product){
    const connection = await getConnection();
    const query = 'INSERT INTO products (title, price, description, category) VALUES (?, ?, ?, ?)';
    try {
        const insertResult = await connection.execute(query, [product.title, product.price, product.description, product.category]);
        console.log('INSERT query result:', insertResult[0].affectedRows);
    } catch (error) {
        console.log('Product cannot created : ', error);
    }
    // Close the connection
    connection.end();
}//end of createNewProduct()

const product = {
    "title": "Dell inspire",
    "price": "89000.00",
    "description": "Notebook",
    "category": "Electronic"
};
//createNewProduct(product);


async function selectProducts(){
    const connection = await getConnection();
    const query = 'SELECT * FROM products';
    try {
        const [rows] = await connection.query(query);
        console.log(`Products[] : ${rows.length}`,rows);
    } catch (error) {
        console.error('error : ', error);
    }
    // Close the connection
    connection.end();
}//end of selectProducts()

selectProducts();

async function findProductById(id){
    const connection = await getConnection();
    const query = 'SELECT * FROM products WHERE id=?';
    try {
        const row = await connection.query(query, [id]);
        if(row.length>0){
            console.log('Product : ', row[0]);
        }else{
            console.log('Product Not Found : ', row[0]);
        }
    } catch (error) {
        console.log('error : ',error);
    }
     // Close the connection
     connection.end();
}//end of findProductById()

findProductById(2);

async function deleteProductById(id){
    const connection = await getConnection();
    const query = 'DELETE FROM products WHERE id=?';
    try {
        const deleteResult = await connection.execute(query, [id]);
        console.log(`Delete query result : ${deleteResult[0].affectedRows}`);
    } catch (error) {
        console.log('Product Not Found : ', error);
    }
     // Close the connection
     connection.end();
}

deleteProductById(4);

async function updateProduct(productId, productFields){
    const connection = await getConnection();
    try {
        //Step 1. collect all columns
        const updateColumns = Object.keys(productFields).map(column=> `${column}=?`).join(', ');
        const query = `UPDATE products SET ${updateColumns} WHERE id = ?`;
        const values = [...Object.values(productFields), productId];

        const updateResult = await connection.execute(query, values);
        console.log('Update query result:', updateResult.affectedRows);
    } catch (error) {
        console.log('Product cannot created : ', error);
    }
    // Close the connection
    connection.end();
}//end of updateProduct()

const productId = 7; // Replace with the desired product ID
const updatedFields = {
    title: 'Pink Bag',
    price: 23.99,
    description: 'Bag pack',
    category: 'Lag'
};

updateProduct(productId, updatedFields);
