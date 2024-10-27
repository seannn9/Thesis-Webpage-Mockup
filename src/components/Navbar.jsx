import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import propTypes from "prop-types";

function Navbar(props) {
    return (
        <>
            <div className="navbar">
                <HashLink className={props.activeHome} to="/#home" smooth>
                    Home
                </HashLink>
                <HashLink className={props.activeAbout} to="/#about" smooth>
                    About
                </HashLink>
                <HashLink className={props.activeContact} to="/#contact" smooth>
                    Contact
                </HashLink>
                <Link className={props.activeParams} to="/parameters">
                    Parameters
                </Link>
                <Link className={props.activePresets} to="/presets">
                    Presets
                </Link>
                <Link
                    className={props.activeLogin}
                    to="/login"
                    style={{ marginRight: "20px", float: "right" }}
                >
                    Login / Register
                </Link>
            </div>
        </>
    );
}

Navbar.propTypes = {
    activeHome: propTypes.string,
    activeAbout: propTypes.string,
    activeContact: propTypes.string,
    activeParams: propTypes.string,
    activePresets: propTypes.string,
    activeLogin: propTypes.string,
};

export default Navbar;
