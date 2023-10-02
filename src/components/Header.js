import React, { useState } from 'react';
import { useCart } from './CartContext';
import CartSidebar from "./CartSidebar";

function Header() {
    const { cart } = useCart();
    const [isCartOpen, setCartOpen] = useState(false);

    const handleViewCart = () => {
        // Implement a function to display the cart (e.g., a modal or a dropdown)
        setCartOpen(!isCartOpen);
    };

    const handleCloseCart = () => {
        setCartOpen(false);
    };

    return (
        <div className="header">
            {/* Logo */}
            <img src="logo192.png" alt="Pizza Logo" className="logo" />

            {/* Company Name */}
            <h1 className="company-name">Red Carpet Pizza</h1>

            {/* View Cart Button */}
            <button onClick={handleViewCart}>View Cart ({cart.length})</button>
            {isCartOpen && <CartSidebar closeCart={handleCloseCart} /> }
        </div>
    );
}
export default Header;