import React, { useState, useEffect } from 'react';

function Notification({ message, onClose }) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Auto-close the notification after a few seconds
        const timer = setTimeout(() => {
            setIsVisible(false);
            onClose();
        }, 3000); // Adjust the duration as needed

        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className={`notification ${isVisible ? 'visible' : ''}`}>
            <p>{message}</p>
        </div>
    );
}
export default Notification;
