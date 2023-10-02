import React, { useState } from 'react';
import DrinksData from './DrinksData';
import Notification from './Notification';
import { useCart } from './CartContext';

function DrinksMenu() {
    const [notification, setNotification] = useState(null);

    const { addToCart } = useCart(); // Use addToCart from the context

    const handleAddToCart = (drink) => {
        addToCart(drink);
        setNotification(`${drink.name} added to cart`);
    };

    const closeNotification = () => {
        setNotification(null);
    };

    return (
        <div className="drinks-menu">
            <div id="drinks" className="drinks-section"></div>
            <div className="drinks-grid">
                {DrinksData.map((drink) => (
                    <div key={drink.id} className="drinks-item">
                        <h3>{drink.name}</h3>
                        <img src={drink.image} alt={drink.name} style={{ width: '200px', height: '250px'}}/>
                        <p>£{drink.price.toFixed(2)}</p>
                        <button onClick={() => handleAddToCart(drink)}>Add to Cart</button>
                    </div>
                ))}

            </div>
            {/* Display the notification if it exists */}
            {notification && <Notification message={notification} onClose={closeNotification} />}
        </div>
    );
}
export default DrinksMenu;