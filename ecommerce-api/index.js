const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

//in-memory db
const products = [
    {
        id: 1,
        title: "Bag pack",
        price: 4000,
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "language"
    },
    {
        id: 2,
        title: "Wallet",
        price: 200,
        description: "stylish wallet for stylish man",
        category: "language"
    }
];

// Middleware
app.use(bodyParser.json()); //request and response data handling

// Define routes GET POST PUT DELETE apis
app.get('/', (req, resp)=>{
    resp.send('<h1>Welcome at e-commerce app.</h1>');
});

app.get('/api/products', (req, resp)=>{
    console.log('GET : calling /api/products');
    resp.send(products);
});

app.get('/api/products/:id', (req, resp)=>{
    console.log(`GET: calling /api/products/${req.params.id}`);
    let product = products.find(p=>p.id === parseInt(req.params.id));
    if(!product) resp.status(404).send('Product NOT FOUND!');
    resp.send(product);
});

app.post(`/api/products`, (req, resp)=>{
    console.log(`POST : calling /api/products/${JSON.stringify(req.body)}`);
    const product = {
        id: products.length+1,
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        category: req.body.category
    };
    products.push(product);
    resp.status(201,'created').send(product);
});

app.put(`/api/products/:id`, (req, resp)=>{
    console.log(`PUT : calling /api/products/${JSON.stringify(req.body)}`);
    const product = products.find(prod=>prod.id === parseInt(req.params.id)); 
    if(!product) resp.status(404).send('Product NOT FOUND!');
    
    product.title = req.body.title;
    product.price = req.body.price;
    product.description = req.body.description;
    product.category = req.body.category;
    
     resp.send(product);
 });

 app.delete('/api/products/:id', (req, resp)=>{
    console.log(`DELETE : calling /api/products/${req.params.id}`);
    let product = products.find(p=>p.id === parseInt(req.params.id));
    if(!product) resp.status(404).send('Product NOT FOUND!');
    //Delete
    const index = products.indexOf(product);
    products.splice(index,1);
    resp.send(product);
});

const PORT = process.env.PORT || 5000;

const swaggerDocument = YAML.load('./swagger.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, ()=>{
    console.log(`e-commerce app-server is running at port ${PORT}.`);
});
