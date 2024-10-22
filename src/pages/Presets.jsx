import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import PresetCard from "../components/PresetCard";
import addImg from "../images/add.png";

function Presets() {
    return (
        <>
            <div className="navbar">
                <Link to="/">Home</Link>
                <HashLink to="/#about" smooth>
                    About
                </HashLink>
                <HashLink to="/#contact" smooth>
                    Contact
                </HashLink>
                <Link to="/parameters">Parameters</Link>
                <Link className="active" to="/presets">
                    Presets
                </Link>
                <Link className="loginNav" to="/login">
                    Login
                </Link>
            </div>
            <div className="adjustTitle">
                <h1>Load Presets</h1>
            </div>
            <div className="presetContainer">
                <PresetCard className="card" presetTitle="PRESET 1" />
                <Link to="/parameters">
                    <PresetCard
                        className="card"
                        presetTitle="ADD PRESET"
                        src={addImg}
                    />
                </Link>
            </div>
        </>
    );
}

export default Presets;
