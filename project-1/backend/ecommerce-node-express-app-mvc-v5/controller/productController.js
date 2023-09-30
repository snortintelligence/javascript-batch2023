const { request, response } = require("express");
const productModel = require("../model/productModel");

const getAllProducts = (request, response) => {
  productModel.getAllProducts((err, products) => {
    if (err) {
      return response.status(500).json({
        status: "success",
        message: "Internal Server Error",
      });
    }

    if (products.length > 0) {
      return response.status(200).json({
        status: "success",
        count: products.length,
        products: products,
      });
    } else {
      return response.status(200).json({
        status: "success",
        count: products.length,
        message: "No more products",
      });
    }
  });
}; //end of getAllProducts

const getProductById = (request, response) => {
  const id = parseInt(request.params.id);
  productModel.getProductById(id, (err, product) => {
    if (err) {
      return response.status(500).json({
        status: "success",
        message: "Internal Server Error",
      });
    }
    if (product.length > 0) {
      return response.status(200).json({
        status: "success",
        product: product[0],
      });
    } else {
      return response.status(404).json({
        status: "Product Not Found",
        message: "No more products",
      });
    }
  });
}; //end of getProductById

const createProduct = (request, response) => {
  const productData = request.body;
  productModel.createProduct(productData, (err, insertId) => {
    if (err) {
      return response
        .status(500)
        .json({ status: "error", message: "Internal Server Error" });
    }
    return response.status(201).json({
      status: "success",
      message: `New product created by id: ${insertId}.`,
    });
  });
}; //end of createProduct

const updateProduct = (request, response) => {
  const productData = request.body;
  const id = parseInt(request.params.id);
  productModel.updateProduct(id, productData, (err, affectedRows) => {
    if (err) {
      return response
        .status(500)
        .json({ status: "error", message: "Internal Server Error" });
    }
    if (affectedRows === 1) {
      return response.status(200).json({
        status: "success",
        message: `Product updated by id: ${id}.`,
      });
    } else {
      return response.status(404).json({
        status: "not found",
        message: `Product not updated by id: ${id}.`,
      });
    }
  });
}; //end of updateProduct

const deleteProductById = (request, response) => {
  const id = parseInt(request.params.id);
  productModel.deleteProductById(id, (err, affectedRows) => {
    if (err) {
      return response
        .status(500)
        .json({ status: "error", message: "Internal Server Error" });
    }
    if (affectedRows === 1) {
      return response.status(200).json({
        status: "success",
        message: `Product deleted by id: ${id}.`,
      });
    } else {
      return response.status(404).json({
        status: "not found",
        message: `Product not deleted by id: ${id}.`,
      });
    }
  });
}; //end of deleteProductById

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProductById,
};
