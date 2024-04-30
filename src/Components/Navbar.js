import React from "react";
import "./Navbar.css" 

import logo from "../Assets/Images/Logo.png"

export default function Navbar() {
    return (
        <nav>
            <img className="navbar-logo" src={logo} alt="veggievist logo" />
            <div className="navbar-links">
                <a href="/">Home</a>
                <a href="/">About Us</a>
                <a href="/">Features</a>
                <a href="/">Our Team</a>
                <a href="#download">Download</a>
            </div>
        </nav>
    )
}