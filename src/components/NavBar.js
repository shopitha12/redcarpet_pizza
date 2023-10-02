import React from 'react';

function NavBar() {

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="navbar">
            <ul>
                <li>
                    <button onClick={() => scrollToSection('pizza')}>Pizza</button>
                </li>
                <li>
                    <button onClick={() => scrollToSection('sides')}>Sides</button>
                </li>
                <li>
                    <button onClick={() => scrollToSection('drinks')}>Drinks</button>
                </li>
            </ul>
        </nav>

    );
}

export default NavBar;
