import React from 'react';
import '../styles/Topbar.css'; // Add your CSS styles here

const Topbar = () => {
    return (
        <div className="topbar">
            <img src="/path/to/logo.png" alt="AdFortune Logo" className="logo" />
            <h1 className="project-name">AdFortune</h1>
        </div>
    );
};

export default Topbar;
