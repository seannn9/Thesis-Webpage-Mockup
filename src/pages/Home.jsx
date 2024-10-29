import React, { useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Navbar from "../components/Navbar";
import "../styles/App.css";
import Notif from "../components/Notification";

function Home() {
    const [isActive, setIsActive] = useState(false);
    const toggleNotifications = () => {
        setIsActive((prev) => !prev);
    };
    return (
        <>
            <Navbar
                activeHome="active"
                onNotificationClick={toggleNotifications}
            />
            <Notif status={isActive ? "active" : "notActive"} />
            <div className="backgroundContainer" id="home">
                <div className="thesisTitle">
                    <h4>
                        Optimizing Plant Growth with Automated System for
                        Controlled Environment Parameters
                    </h4>
                </div>
            </div>
            <div className="introduction">
                <h2 className="fadeIn">Welcome To Our Website</h2>
                <p className="fadeIn">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Sed ut
                    perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam, eaque
                    ipsa quae ab illo inventore veritatis et quasi architecto
                    beatae vitae dicta sunt explicabo. Nemo enim ipsam
                    voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                    sed quia consequuntur magni dolores eos qui ratione
                    voluptatem sequi nesciunt. Neque porro quisquam est, qui
                    dolorem ipsum quia dolor sit amet, consectetur, adipisci.
                </p>
            </div>
            <About />
            <Contact />
        </>
    );
}

export default Home;
