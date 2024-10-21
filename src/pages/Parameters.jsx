import { Link } from "react-router-dom";
import React from "react";

function Parameters() {
    return (
        <>
            <div className="navbar">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link className="active" to="/parameters">
                    Parameters
                </Link>
                <Link to="/presets">Presets</Link>
                <Link className="loginNav" to="/login">
                    Login
                </Link>
            </div>
        </>
    );
}

export default Parameters;
