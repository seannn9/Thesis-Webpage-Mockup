import { Link } from "react-router-dom";
import React from "react";
import "../styles/Parameters.css";
import humidityImg from "../images/humidity.png";
import tempImg from "../images/temperatures.png";
import lightImg from "../images/bulb.png";
import soilMoistImg from "../images/meter.png";
import Card from "../components/Card"; // Card component to avoid repeating code

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
                {/* <div className="card humidity">
                    <p>HUMIDITY</p>
                    <img src={humidityImg} alt="Humidity Icon" />
                    <br />
                    <br />
                    <br />
                    <br />
                    <form action="">
                        <label htmlFor="">Input a Value</label>
                        <br />
                        <input
                            type="text"
                            name="humidityVal"
                            className="humidityVal"
                            placeholder="Value"
                        />
                    </form>
                </div> */}
                <Card
                    name="humidityVal"
                    inputClassName="inputHumidityVal"
                    className="card humidity"
                    src={humidityImg}
                />
                <div className="card temperature">
                    <p>TEMPERATURE</p>
                    <img src={tempImg} alt="Temperature Icon" />
                </div>
                <div className="card light">
                    <p>LIGHT</p>
                    <img src={lightImg} alt="Light Bulb Icon" />
                </div>
                <div className="card soilMoisture">
                    <p>SOIL MOISTURE</p>
                    <img src={soilMoistImg} alt="Soil Moisture Icon" />
                </div>
            </div>
        </>
    );
}

export default Parameters;
