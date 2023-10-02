import React, { useState } from 'react';

function Checkout({ cartItems, onOrderComplete }) {
    // State for user details
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    // Function to handle the order submission
    const handleOrderSubmit = () => {
        // Create an order object with user details and cart items
        const order = {
            name,
            address,
            phone,
            items: cartItems,
        };

        // Send the order to a server or perform any necessary actions
        // (e.g., processing payment, sending confirmation email)
        // Call the onOrderComplete callback to indicate that the order is complete
        onOrderComplete();
    };

    return (
        <div className="checkout">
            <h2>Checkout</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address:</label>
                    <input
                        type="text"
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </div>
                <button type="button" onClick={handleOrderSubmit}>
                    Confirm Order
                </button>
            </form>
        </div>
    );
}

export default Checkout;
