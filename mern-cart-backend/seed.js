const mongoose = require('mongoose');
require('dotenv').config();
const Product = require('./models/Product'); // Ensure the path is correct

mongoose.connect("mongodb://localhost:27017/productDB")
    .then(async () => {
        console.log('MongoDB connected');

        try {
            if (typeof Product.insertMany === 'function') {
                await Product.insertMany([
                    { name: "IPHONE",     price:500, description: "RAM 12GB STORAGE 256GB" },
                    { name: "SAMSUNG",    price:300, description: "RAM 8GB STORAGE 128GB  " },
                    { name: "VIVO",       price:200, description: "RAM 4GB STORAGE 64GB" },
                    { name:"INFINIX",     price:150, description: "RAM 4GB STORAGE 64GB" },
                    { name:"OPPO",        price:100, description: "RAM 4GB STORAGE 64GB" },
                    { name:"HUAWEI",      price:80, description: "RAM 4GB STORAGE 64GB" },
                ]);
                console.log('Products inserted successfully!');
            } else {
                console.error('Error: Product.insertMany is not a function');
            }
        } catch (err) {
            console.error('Error inserting products:', err);
        } finally {
            mongoose.connection.close();
        }
    })
    .catch(err => console.error('Failed to connect to MongoDB:', err));
