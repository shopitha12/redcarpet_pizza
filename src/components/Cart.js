import React from 'react';
import { useCart } from './CartContext';

function Cart() {
    const { cart } = useCart();
    const textStyle = {
        color: 'black',
    };

    return (
        <div className="cart">
            {cart.length === 0 && <p style={textStyle}>Your cart is empty.</p>}
        </div>
    );
}

export default Cart;
