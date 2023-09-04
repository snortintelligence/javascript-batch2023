//Step 1. import required modules
const http = require("http");
const url = require("url");
const { parse } = require("querystring");

//Step 2. need a store
const products = [
  {
    id: 1,
    title: "Bag pack",
    price: 4000,
    description:
      "Your perfect pack for everyday use and walks in the forest.",
    category: "luggage bags",
  },
  {
    id: 2,
    title: "Wallet",
    price: 200,
    description: "stylish wallet for stylish man",
    category: "luggage bags",
  },
];

const createProduct = (product) => {
  console.log(`request for creating new product data :: ${JSON.stringify(product)}`);
  products.push(product);
};

const getProductList = () => {
  console.log(`request for fetch all data.`);
  return products;
};

const findProductById = (id) => {
  console.log(`request for fetch data id :: ${id}.`);
  const find = products.filter((product) => product.id === id)[0];
  return find;
};

const deleteProductById = (id) => {
  console.log(`request for deleting data id :: ${id}.`);
  const index = products.findIndex((product) => product.id === id); // index -1 if element not present
  if (index != -1) {
    products.splice(index, 1); //remove only 1 matching element at that index
    return true;
  }
  return false;
};

const homepage = (message) => {
  return `${message}`;
};

const updateProduct = (id, updatedProduct) => {
  console.log(`request for updating data :: ${JSON.stringify(updatedProduct)}`);
  const index = products.findIndex((product) => product.id === id); // index -1 if element not present
  if (index != -1) {
    products[index] = { ...products[index], ...updatedProduct };
    return true;
  }
  return false;
};

const root_url = `/api/products`;

//Step 3. Create and configuring a server for http sending request(object) and getting response(object) : #GET #POST #PUT #DELETE
const server = http.createServer((req, resp) => {
  //destructuring assignment to extract two properties from the req object
  // and reqUrl, which means that the value of req.url will be assigned to the reqUrl variable.
  const { method, url: reqUrl } = req;
  //parsedUrl variable, which would typically contain properties such as protocol, hostname, pathname, query, etc., depending on the URL structure.
  const parsedUrl = url.parse(reqUrl, true);
  //make api call options
  switch (true) {
    case method === "GET" && parsedUrl.pathname === `${root_url}`: {
      console.log(`api call => ${root_url}`);
      resp.writeHead(200, { "Content-Type": "application/json" });
      resp.end(JSON.stringify(getProductList()));
      break;
    } //end of getProductList

    case method === "GET" && parsedUrl.pathname === `${root_url}/find`: {
      console.log(`api call => ${parsedUrl.pathname}`);
      const productId = parsedUrl.query.id;

      if (!productId || isNaN(productId)) {
        resp.writeHead(400, { "Content-Type": "application/json" });
        resp.end(JSON.stringify({ error: "Invalid productId provided" }));
      } else {
        const findProduct = findProductById(parseInt(productId));
        if (findProduct !== undefined && findProduct !== null) {
          resp.writeHead(200, { "Content-Type": "application/json" });
          resp.end(JSON.stringify(findProduct));
        } else {
          resp.writeHead(404, { "Content-Type": "application/json" });
          resp.end(JSON.stringify({ error: "Product not found" }));
        }
      }
      break;
    }

    case method === "POST" && parsedUrl.pathname === `${root_url}/create`: {
      console.log(`api call => ${parsedUrl.pathname}`);

      let requestBody = "";

      req.on("data", (data) => {
        requestBody += data;
      });

      req.on("end", () => {
        try {
          const newProduct = JSON.parse(requestBody);

          // Add validation logic here to ensure newProduct is valid
          if (newProduct !== null) {
            newProduct.id = parseInt(Math.random().toString().substring(3,6));
            createProduct(newProduct);
            resp.writeHead(201, { "Content-Type": "application/json" });
            resp.end(JSON.stringify(newProduct));
          } else {
            resp.writeHead(400, { "Content-Type": "application/json" });
            resp.end(JSON.stringify({ error: "Invalid product data" }));
          }
        } catch (error) {
          resp.writeHead(500, { "Content-Type": "application/json" });
          resp.end(JSON.stringify({ error: "Internal server error" }));
        }
      });
      break;
    }

    case method === "PUT" && parsedUrl.pathname === `${root_url}/update`: {
      console.log(`api call => ${parsedUrl.pathname}`);
      // Update existing product
      let requestBody = "";

      req.on("data", (data) => {
        requestBody += data;
      });

      req.on("end", () => {
        try {
          const updatedProduct = JSON.parse(requestBody);
          // Add validation logic here to ensure newProduct is valid
          if (updatedProduct != null) {
            const isUpdated = updateProduct(updatedProduct.id, updatedProduct);
            if (isUpdated) {
              resp.writeHead(200, { "Content-Type": "application/json" });
              resp.end(JSON.stringify(updatedProduct));
            } else {
              resp.writeHead(404, { "Content-Type": "application/json" });
              resp.end(JSON.stringify({ error: "Product not found" }));
            }
          } else {
            resp.writeHead(400, { "Content-Type": "application/json" });
            resp.end(JSON.stringify({ error: "Invalid product data" }));
          }
        } catch (error) {
          resp.writeHead(500, { "Content-Type": "application/json" });
          resp.end(JSON.stringify({ error: "Internal server error" }));
        }
      });
      break;
    } //end of updatedProduct

    case method === "DELETE" && parsedUrl.pathname === `${root_url}/delete`: {
      console.log(`api call => ${parsedUrl.pathname}`);
      // Deleting an existing product
      const productId = parsedUrl.query.id;

      if (!productId || isNaN(productId)) {
        resp.writeHead(400, { "Content-Type": "application/json" });
        resp.end(JSON.stringify({ error: "Invalid productId provided" }));
      } else {
        const findProduct = findProductById(parseInt(productId));
        const isDeleted = deleteProductById(parseInt(productId));

        if (isDeleted) {
          resp.writeHead(204, { "Content-Type": "application/json" });
          resp.end(JSON.stringify(findProduct));
        } else {
          resp.writeHead(404, { "Content-Type": "application/json" });
          resp.end(JSON.stringify({ error: "Product not found" }));
        }
      }
      break;
    } //end of deleteProductById

    default:
      break;
  }
}); //end of creating server

//Step 4. listen server on port
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
