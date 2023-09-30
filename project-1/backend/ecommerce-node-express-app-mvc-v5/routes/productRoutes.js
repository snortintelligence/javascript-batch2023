const express = require("express");
const bodyParser = require("body-parser");

const productController = require('../controller/productController');

const router = express.Router();
router.use(bodyParser.json());

router.route("/")
    .get(productController.getAllProducts)
    .post(productController.createProduct)

router.route("/:id")
    .get(productController.getProductById)
    .put(productController.updateProduct)
    .delete(productController.deleteProductById)    

module.exports = router;    