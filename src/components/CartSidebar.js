import React from 'react';
import { useCart } from './CartContext';
import Cart from './Cart';

function CartSidebar({ isOpen, closeCart }) {
    const { cart, removeFromCart } = useCart();
    const textStyle = {
        color: 'black',
    };

    // Calculate the total price of items in the cart
    const total = cart.reduce((acc, item) => acc + item.price, 0);

    return (
        <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
            <div className="cart-content">
                <h2 style={textStyle}>Shopping Cart</h2>
                <ul>
                    {cart.map((item, index) => (
                        <li key={index} style={textStyle}>
                            {item.name} - Size: {item.size}, Base: {item.base} - £{item.price.toFixed(2)}
                            <button onClick={() => removeFromCart(index)}>Remove</button>
                        </li>
                    ))}
                </ul>
                <p style={textStyle}>Total: £{total.toFixed(2)}</p> {/* Display the total */}
            </div>
            <Cart />
        </div>
    );
}

export default CartSidebar;
