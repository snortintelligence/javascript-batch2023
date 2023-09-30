/**
 * Model: Represents the application's data and business logic. It manages the data, 
 * responds to requests for information, and updates the data when necessary. 
 * The Model is responsible for data storage, retrieval, and manipulation.
 * here productModel.js handles database operations.
 * 
 */

const SQL_CONNECTION = require("../config/databaseConfig");

// import all necessary node modules
const CONNECTION = SQL_CONNECTION;

const getAllProducts=(callback)=>{
    const queryStr = `select * from product_tbl`;
    CONNECTION.query(queryStr, (err, result)=>{
        if(err){
            callback(err, null);
        }
        callback(null, result);
    });
}

const getProductById=(id,callback)=>{
    const queryStr = `select * from product_tbl WHERE id=?`;
    CONNECTION.query(queryStr,[id], (err, result)=>{
        if(err){
            callback(err, null);
        }
        callback(null, result);
    });
}

function createProduct(productData, callback) {
    const { name, price, description, category } = productData;
    const queryStr = `insert into product_tbl(name, price, description, category) values(?,?,?,?)`;
    CONNECTION.query(
      queryStr,
      [name, price, description, category],
      (err, result) => {
        if (err) {
          callback(err, null);
        }
        callback(null, result.insertId);
      }
    );
  }


  function updateProduct(id, productData, callback) {
    const { name, price, description, category } = productData;
    const queryStr = `update product_tbl set name = ?, price=?, description=?, category=? where id=?;`;
    CONNECTION.query(
      queryStr,
      [name, price, description, category, id],
      (err, result) => {
        if (err) {
          callback(err, null);
        }
        callback(null, result.affectedRows);
      }
    );
  }


  function deleteProductById(id, callback) {
    const queryStr = `delete from product_tbl where id=?`;
    CONNECTION.query(queryStr, [id], (err, result) => {
      if (err) {
        callback(err, null);
      }
      callback(null, result.affectedRows);
    });
  }

// exports for external uses
module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProductById,
};