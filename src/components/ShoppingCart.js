import React from 'react';
import CartItem from './CartItem'; // Import the CartItem component

function ShoppingCart({ cartItems, onQuantityChange, onItemRemove, onCheckout }) {
    return (
        <div className="shopping-cart">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty. Add some delicious pizzas!</p>
            ) : (
                <>
                    {cartItems.map((item) => (
                        <CartItem
                            key={item.id}
                            item={item}
                            onQuantityChange={onQuantityChange}
                            onItemRemove={onItemRemove}
                        />
                    ))}
                    <div className="cart-total">
                        <p>Total: ${calculateTotal(cartItems).toFixed(2)}</p>
                    </div>
                    <button onClick={onCheckout}>Checkout</button>
                </>
            )}
        </div>
    );
}

export default ShoppingCart;
// Helper function to calculate the total price of items in the cart
function calculateTotal(cartItems) {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
}