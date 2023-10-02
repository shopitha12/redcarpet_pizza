import React, { useState } from 'react';
import { useCart } from "./CartContext";
import SidesData from './SidesData';
import Notification from './Notification';
function SidesMenu() {
    const [notification, setNotification] = useState(null);

    const { addToCart } = useCart();

    const handleAddToCart = (sides) => {
        addToCart(sides);
        setNotification(`${sides.name} added to cart`);
    };

    const closeNotification = () => {
        setNotification(null);
    };
    return (
        <div className="sides-menu">
            <div id="sides" className="sides-section"></div>
            <div className="sides-grid">
                {SidesData.map((sides) => (
                    <div key={sides.id} className="sides-item">
                        <h3>{sides.name}</h3>
                        <img src={sides.image} alt={sides.name} style={{ width: '200px', height: '150px'}}/>
                        <p>£{sides.price.toFixed(2)}</p>
                        <button onClick={() => handleAddToCart(sides)}>Add to Cart</button>
                    </div>
                ))}
            </div>
            {/* Display the notification if it exists */}
            {notification && <Notification message={notification} onClose={closeNotification} />}
        </div>
    );
}

export default SidesMenu;
