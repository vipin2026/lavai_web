import React from 'react';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import '../styles/Layout.css'; // Add your CSS styles here

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Topbar />
            <div className="content">
                <Sidebar />
                <div className="main-content">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layout;
