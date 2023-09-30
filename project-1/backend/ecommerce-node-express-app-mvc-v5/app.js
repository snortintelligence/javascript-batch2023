// app.js

const express = require("express");
const morgan = require('morgan');
const fs = require('node:fs');
const path = require('path');
const productRoutes = require("./routes/productRoutes");

const app = express();

// ... (other code)
app.use(morgan('dev'));

app.use("/api/v3/products", productRoutes);

// ... (other code)

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server at : http://localhost:${PORT}/`);
});
