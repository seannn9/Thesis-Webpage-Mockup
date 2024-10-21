import React from "react";
import { Link } from "react-router-dom";

function About() {
    return (
        <>
            <div className="navbar">
                <Link to="/">Home</Link>
                <Link className="active" to="/about">
                    About
                </Link>
                <Link to="/contact">Contact</Link>
                <Link to="/parameters">Parameters</Link>
                <Link to="/presets">Presets</Link>
                <Link className="loginNav" to="/login">
                    Login
                </Link>
            </div>
        </>
    );
}

export default About;
