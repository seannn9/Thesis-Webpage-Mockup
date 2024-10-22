import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import PresetCard from "../components/PresetCard";
import addImg from "../images/add.png";
import Navbar from "../components/Navbar";

function Presets() {
    return (
        <>
            <Navbar activePresets="active" />
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
