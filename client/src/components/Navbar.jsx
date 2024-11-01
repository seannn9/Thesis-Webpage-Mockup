import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import propTypes from "prop-types";
import notifImg from "../images/notification.png";

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
                <div
                    className="rightContainer"
                    style={{ marginRight: "20px", float: "right" }}
                >
                    <Link className={props.activeLogin} to="/register">
                        Login / Register
                    </Link>
                    <button
                        className={props.activeNotif}
                        style={{ cursor: "pointer" }}
                        onClick={props.onNotificationClick}
                    >
                        <img src={notifImg} alt="Notification Icon" />
                    </button>
                </div>
            </div>
        </>
    );
}

Navbar.propTypes = {
    onNotificationClick: propTypes.func,
    activeHome: propTypes.string,
    activeAbout: propTypes.string,
    activeContact: propTypes.string,
    activeParams: propTypes.string,
    activePresets: propTypes.string,
    activeLogin: propTypes.string,
    activeNotif: propTypes.string,
};

export default Navbar;
