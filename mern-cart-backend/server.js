const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/productDB", {})
    .then(() => console.log("Connection built"))
    .catch((e) => console.log("Connection failed"));


// Import routers
const productsRouter = require('./routes/products'); 
const cartRouter = require('./routes/cart'); 

// Use routers
app.use('/api/products', productsRouter); 
app.use('/api/cart', cartRouter);

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});