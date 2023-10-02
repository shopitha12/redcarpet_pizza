import React from 'react';

function CartButton({ onClick, cartCount }) {
    return (
        <button className="view-cart-button" onClick={onClick}>
            View Cart ({cartCount})
        </button>
    );
}

export default CartButton;
