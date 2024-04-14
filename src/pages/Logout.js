import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        try {
            window.localStorage.clear();
            navigate("/login"); // Navigate to the root URL
        } catch (error) {
            console.error("Logout failed:", error);
            // Handle error gracefully, maybe show a message to the user
        }
    };

    return (
        <button onClick={handleLogout}>Logout</button>
    );
}

export default Logout;
