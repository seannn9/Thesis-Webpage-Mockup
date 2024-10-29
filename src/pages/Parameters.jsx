import React, { useState } from "react";
import "../styles/Parameters.css";
import humidityImg from "../images/humidity.png";
import tempImg from "../images/temperatures.png";
import lightImg from "../images/bulb.png";
import soilMoistImg from "../images/meter.png";
import ParamCard from "../components/ParamCard";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";
import plantImg from "../images/plant.jpg";
import Notif from "../components/Notification";

function Parameters() {
    const [isActive, setIsActive] = useState(false);
    const toggleNotifications = () => {
        setIsActive((prev) => !prev);
    };
    return (
        <>
            <Helmet>
                <style>
                    {`
                        html, body {
                            min-height: 100%;
                        }
                        body {
                            background-image: url(${plantImg});
                            background-size: cover;
                            background-repeat: no-repeat;
                            background-position: center;
                        }
                    `}
                </style>
            </Helmet>
            <Navbar
                activeParams="active"
                onNotificationClick={toggleNotifications}
                activeNotif={isActive ? "active" : "notActive"}
            />
            <Notif status={isActive ? "active" : "notActive"} />
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
