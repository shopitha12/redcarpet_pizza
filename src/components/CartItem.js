import React from 'react';

function CartItem({ item }) {
    const { name, base, size, quantity, price } = item;

    return (
        <div className="cart-item">
            <div className="cart-item-info">
                <h3>{name}</h3>
                <p>Base: {base}</p>
                <p>Size: {size}</p>
            </div>
            <div className="cart-item-quantity">
                <p>Quantity: {quantity}</p>
            </div>
            <div className="cart-item-total">
                <p>Total: £{price.toFixed(2)}</p>
            </div>
        </div>
    );
}

export default CartItem;
