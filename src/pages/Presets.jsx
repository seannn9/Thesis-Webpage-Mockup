import React from "react";
import PresetCard from "../components/PresetCard";
import addImg from "../images/add.png";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

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
