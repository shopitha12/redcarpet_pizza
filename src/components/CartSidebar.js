import React from 'react';
import { useCart } from './CartContext';

function CartSidebar({ isOpen, closeCart }) {
    const { cart } = useCart();

    return (
        <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
            <div className="cart-content">
                <h2>Shopping Cart</h2>
                <ul>
                    {cart.map((item, index) => (
                        <li key={index}>{item.name}</li>
                    ))}
                </ul>
            </div>
            <button onClick={closeCart}>Close Cart</button>
        </div>
    );
}
export default CartSidebar;