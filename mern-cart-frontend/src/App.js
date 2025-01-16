import React from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart'; 

function App() {
    const refreshCart = () => {
        console.log('Cart updated!');
    };

    return (
        <div>
            <ProductList refreshCart={refreshCart} />
            <Cart />
        </div>
    );
}
export default App;
