import React, { useState, useRef } from 'react';
import Header from './components/Header';
import PizzaMenu from './components/PizzaMenu';
import SidesMenu from './components/SidesMenu';
import DrinksMenu from './components/DrinksMenu';
import CartModal from './components/CartModal';
import NavBar from './components/NavBar';
import { CartProvider} from "./components/CartContext";
import './App.css';
import Cart from "./components/Cart";

function App() {

    const [isCartModalOpen, setIsCartModalOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const toggleCartModal = () => {
        setIsCartModalOpen(!isCartModalOpen);
    };

    const pizzaRef = useRef(null);
    const sidesRef = useRef(null);
    const drinksRef = useRef(null);

    const scrollToSection = (section) => {
        switch (section) {
            case 'pizza':
                pizzaRef.current.scrollIntoView({behavior: 'smooth'});
                break;
            case 'sides':
                sidesRef.current.scrollIntoView({behavior: 'smooth'});
                break;
            case 'drinks':
                drinksRef.current.scrollIntoView({behavior: 'smooth'});
                break;
            default:
                break;
        }
    };

    return (
        <CartProvider>
            <div className="App">
                <Header onCartClick={toggleCartModal} />
                <NavBar scrollToSection={scrollToSection} />
                <PizzaMenu cartItems={cartItems} setCartItems={setCartItems} ref={pizzaRef}/>
                <SidesMenu cartItems={cartItems} setCartItems={setCartItems} ref={sidesRef}/>
                <DrinksMenu cartItems={cartItems} setCartItems={setCartItems} ref={drinksRef}/>
                <Cart />
                {isCartModalOpen && (
                    <CartModal cartItems={cartItems} onClose={toggleCartModal} />
                )}
            </div>
            </CartProvider>
                );
                }

export default App;