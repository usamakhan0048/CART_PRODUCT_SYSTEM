import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../api';

const ProductList = ({ refreshCart }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`${API_BASE_URL}/products`)
            .then(res => setProducts(res.data))
            .catch(err => console.error(err));
    }, []);

    const addToCart = (productId) => {
        axios.post(`${API_BASE_URL}/cart`, {
            userId: 'user777',
            productId,
            quantity: 1,
        }).then(() => refreshCart())
          .catch(err => console.error(err));
    };

    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {products.map(product => (
                    <li key={product._id}>
                        <strong>{product.name}</strong> - ${product.price}
                        <button onClick={() => addToCart(product._id)}>Add to Cart</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
