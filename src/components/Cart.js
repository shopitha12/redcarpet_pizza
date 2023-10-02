// Cart.js

import React from 'react';
import { useCart } from './CartContext';

function Cart() {
    const { cart, removeFromCart } = useCart();

    return (
        <div className="cart">
            <h2>Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cart.map((item, index) => (
                        <li key={index}>
                            {item.name} - ${item.price.toFixed(2)}
                            <button onClick={() => removeFromCart(index)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}


export default Cart;