import React, { useState } from 'react';
import { useCart } from './CartContext';
import CartSidebar from "./CartSidebar";
import CartButton from "./CartButton";

function Header({ onCartClick, cartCount }) {
    const { cart } = useCart();
    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleCartSidebar = () => {
        setIsCartOpen(!isCartOpen);
    };

    return (
        <div className="header">
            {/* Logo */}
            <img src="logo192.png" alt="Pizza Logo" className="logo" />

            {/* Company Name */}
            <h1 className="company-name">
                <span>Red Carpet</span> Pizza
            </h1>

            <div>
                <CartButton onClick={toggleCartSidebar} cartCount={cart.length} />
                <CartSidebar isOpen={isCartOpen} />
            </div>
        </div>
    );
}

export default Header;