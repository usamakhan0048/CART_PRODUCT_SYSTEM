import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../api';

const Cart = () => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        axios.get(`${API_BASE_URL}/cart/user777`)
            .then(res => {
                setCart(res.data.cart.products);
                setTotal(res.data.total);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h2>Cart</h2>
            <ul>
                {cart.map(item => (
                    <li key={item.productId._id}>
                        {item.productId.name} - ${item.productId.price} x {item.quantity}
                    </li>
                ))}
            </ul>
            <h3>Total: ${total}</h3>
        </div>
    );
};

export default Cart;
