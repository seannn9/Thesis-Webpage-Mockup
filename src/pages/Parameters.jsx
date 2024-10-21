import { Link } from "react-router-dom";
import React from "react";
import "../styles/Parameters.css";
import humidityImg from "../images/humidity.png";
import tempImg from "../images/temperatures.png";
import lightImg from "../images/bulb.png";
import soilMoistImg from "../images/meter.png";
import ParamCard from "../components/ParamCard"; // Card component to avoid repeating code

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
            <div className="adjustTitle">
                <h1>Adjust Parameters</h1>
            </div>
            <div className="parametersCards">
                <ParamCard
                    cardTitle="HUMIDITY"
                    name="humidityVal"
                    inputClassName="inputHumidityVal"
                    className="card humidity"
                    src={humidityImg}
                />
                <ParamCard
                    cardTitle="TEMPERATURE"
                    name="temperatureVal"
                    inputClassName="inputTempVal"
                    className="card temperature"
                    src={tempImg}
                />
                <ParamCard
                    cardTitle="LIGHT"
                    name="lightVal"
                    inputClassName="inputLightVal"
                    className="card light"
                    src={lightImg}
                />
                <ParamCard
                    cardTitle="SOIL MOISTURE"
                    name="soilMoistVal"
                    inputClassName="inputSoilMoistVal"
                    className="card soilMoisture"
                    src={soilMoistImg}
                />
            </div>
            <div className="savePreset">
                <button className="saveBtn">Save Preset</button>
            </div>
        </>
    );
}

export default Parameters;
