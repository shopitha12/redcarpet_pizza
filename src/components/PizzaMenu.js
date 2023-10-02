import React, { useState } from 'react';
import PizzaData from './PizzaData'; // Import your pizza data
import Notification from './Notification';
import { useCart } from './CartContext';


function PizzaMenu() {
    const [selectedSize, setSelectedSize] = useState('Small (8")');
    const [selectedBase, setSelectedBase] = useState('Thin Italian');
    const [selectedHalf1, setSelectedHalf1] = useState('Margherita');
    const [selectedHalf2, setSelectedHalf2] = useState('Pepperoni');
    const [notification, setNotification] = useState(null);
    const [pizzaSizes, setPizzaSizes] = useState({});
    const [pizzaBases, setPizzaBases] = useState({});
    const [combinedPizzaPrice, setCombinedPizzaPrice] = useState(12.99);
    const { addToCart } = useCart();

    const handlePizzaSizeChange = (size, pizzaId) => {
        setPizzaSizes((prevSizes) => ({
            ...prevSizes,
            [pizzaId]: size,
        }));

        // Update selectedSize here
        setSelectedSize(size);
    };

    const handleBaseChange = (base, pizzaId) => {
        setPizzaBases((prevBases) => ({
            ...prevBases,
            [pizzaId]: base,
        }));

        setSelectedBase(base);
    }


    const closeNotification = () => {
        setNotification(null);
    };

    const handleAddToCart = (pizza) => {
        const selectedSize = pizzaSizes[pizza.id] || 'Small (8")';
        const selectedBase = pizzaBases[pizza.id] || 'Thin Italian';
        const updatePrice = calculatePizzaPrice(pizza.price, selectedSize);

        const updatedPizza = {
            ...pizza,
            size: selectedSize,
            base: selectedBase,
            price: updatePrice,
        };

        addToCart(updatedPizza);
        setNotification(`${updatedPizza.name} added to cart`);
    };

    const sizeToPrice = {
        "Small (8\")" : 0,
        "Medium (12\")" : 3.00,
        "Large (16\")": 5.00,
        "Pizzanormous (20\")" : 8.00,
    };

    const calculatePizzaPrice = (basePrice, selectedSize) => {
        const priceModifier = sizeToPrice[selectedSize];
        return basePrice + priceModifier;
    };

        const updateCombinedPizzaPrice = (size) => {
            let price = 12.99; // Default price
            // Adjust the price based on the selected size
            if (size === 'Medium (12")') {
                price = 15.99;
            } else if (size === 'Large (16")') {
                price = 18.99;
            } else if (size === 'Pizzanormous (20")') {
                price = 23.99;
            }
            setCombinedPizzaPrice(price);
        };

    const addCombinedPizzaToCart = () => {
        const combinedPizza = {
            name: `${selectedHalf1} / ${selectedHalf2} Pizza`,
            description: `Half ${selectedHalf1}, Half ${selectedHalf2}`,
            base: selectedBase,
            sizes: [selectedSize],
            price: combinedPizzaPrice, // Adjust the price as needed
            //image: , // Provide the path to the image
        };


        // Call the addToCart function to add the combined pizza to the cart
        handleAddToCart(combinedPizza);
    };
    return (
        <div className="pizza-menu">
            <div id="pizza" className="pizza-section"></div>
            <div className="pizza-grid">
                {PizzaData.map((pizza) => (
                    <div key={pizza.id} className="pizza-item">
                        <h3>{pizza.name}</h3>
                        <img src={pizza.image} alt={pizza.name} style={{ width: '200px', height: '150px'}}/>
                        <p>{pizza.description}</p>
                        <div>
                            <label>Size:</label>
                            <select
                                value={pizzaSizes[pizza.id] || 'Small (8")'}
                                onChange={(e) => handlePizzaSizeChange(e.target.value,pizza.id)}
                            >

                                {pizza.sizes.map((size) => (
                                    <option key={size} value={size}>
                                        {size}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label>Base:</label>
                            <select
                                value={pizzaBases[pizza.id] || 'Thin Italian'}
                                onChange={(e) => handleBaseChange(e.target.value, pizza.id)}
                            >
                                <option value="Thin Italian">Thin Italian</option>
                                <option value="Stone Crust">Stone Crust</option>
                                <option value="Cheese Stuffed Crust">Cheese Stuffed Crust</option>
                                <option value="Vegan">Vegan</option>
                                <option value="Gluten-Free">Gluten-Free</option>
                            </select>
                        </div>
                        <p>£{calculatePizzaPrice(pizza.price, pizzaSizes[pizza.id] || 'Small (8")').toFixed(2)}</p>
                        <button onClick={() => handleAddToCart(pizza)}>Add to Cart</button>
                    </div>
                ))}
                {/* Half 1 and Half 2 Selection */}
                <div className="pizza-item combined-pizza">
                    <h3>Combined Pizza</h3>
                    <img src='/images/combo.jpg' style={{ width: '200px', height: '150px'}}/>
                    <div>
                        <label>Size:</label>
                        <select
                            value={selectedSize}
                            onChange={(e) => {
                                setSelectedSize(e.target.value);
                                updateCombinedPizzaPrice(e.target.value); // Update the combined pizza price
                            }}
                        >
                            {/* Size options here */}
                            {PizzaData[0].sizes.map((size) => (
                                <option key={size} value={size}>
                                    {size}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label>Base:</label>
                        <select
                            value={selectedBase}
                            onChange={(e) => setSelectedBase(e.target.value)}
                        >
                            <option value="Thin Italian">Thin Italian</option>
                            <option value="Stone Crust">Stone Crust</option>
                            <option value="Cheese Stuffed Crust">Cheese Stuffed Crust</option>
                            <option value="Vegan">Vegan</option>
                            <option value="Gluten-Free">Gluten-Free</option>
                        </select>
                    </div>
                    <div>
                        <label>Half 1:</label>
                        <select
                            value={selectedHalf1}
                            onChange={(e) => setSelectedHalf1(e.target.value)}
                        >
                            {PizzaData[0].halves.map((half) => (
                                <option key={half} value={half}>
                                    {half}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label>Half 2:</label>
                        <select
                            value={selectedHalf2}
                            onChange={(e) => setSelectedHalf2(e.target.value)}
                        >
                            {PizzaData[0].halves.map((half) => (
                                <option key={half} value={half}>
                                    {half}
                                </option>
                            ))}
                        </select>
                    </div>
                    <p>£{combinedPizzaPrice.toFixed(2)}</p>
                    <button onClick={addCombinedPizzaToCart}>Add to Cart</button>
                </div>
            </div>
            {/* Display the notification if it exists */}
            {notification && <Notification message={notification} onClose={closeNotification} />}
        </div>
    );
}

export default PizzaMenu;
