import React, { useState } from "react";
import PresetCard from "../components/PresetCard";
import addImg from "../images/add.png";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import plantImg from "../images/plant.jpg";
import Notif from "../components/Notification";

function Presets() {
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
                            height: 100%;
                        }
                        body {
                            background-image: url(${plantImg});
                            background-size: cover;
                            background-repeat: no-repeat;
                            background-position: center;
                            background-attachment: fixed;
                        }
                    `}
                </style>
            </Helmet>
            <Navbar
                activePresets="active"
                onNotificationClick={toggleNotifications}
                activeNotif={isActive ? "active" : "notActive"}
            />
            <Notif status={isActive ? "active" : "notActive"} />
            <div className="adjustTitle">
                <h1>Load Presets</h1>
            </div>
            <div className="presetContainer">
                <PresetCard className="card" presetTitle="PRESET 1" />
                <Link to="/parameters">
                    <div className="card">
                        <p className="cardTitle">ADD PRESET</p>
                        <br />
                        <br />
                        <br />
                        <br />
                        <img src={addImg} />
                    </div>
                </Link>
            </div>
        </>
    );
}

export default Presets;
