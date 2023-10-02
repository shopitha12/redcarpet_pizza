import React from 'react';

function CartModal({ cartItems, onClose }) {
    return (
        <div className="cart-modal">
            <div className="cart-modal-content">
                <div className="cart-header">
                    <h2>Your Cart</h2>
                    <button onClick={onClose}>Close</button>
                </div>
                <div className="cart-items">
                    {cartItems.map((item) => (
                        <div key={item.id} className="cart-item">
                            <h3>{item.name}</h3>
                            <p>Price: &pound;{item.price.toFixed(2)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default CartModal;
