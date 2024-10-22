import React from 'react';
import '../styles/Sidebar.css'; // Add your CSS styles here

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li><a href="/users">Users</a></li>
                <li><a href="/events">Events</a></li>
                <li><a href="/action1">Action 1</a></li>
                <li><a href="/action2">Action 2</a></li>
            </ul>
        </div>
    );
};

export default Sidebar;
