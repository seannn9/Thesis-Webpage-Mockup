import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import About from "./About";
import Contact from "./Contact";

function Home() {
    return (
        <>
            <div className="navbar">
                <HashLink className="active" to="#intro" smooth>
                    Home
                </HashLink>
                <HashLink to="#about" smooth>
                    About
                </HashLink>
                <HashLink to="#contact" smooth>
                    Contact
                </HashLink>
                <Link to="/parameters">Parameters</Link>
                <Link to="/presets">Presets</Link>
                <Link className="loginNav" to="/login">
                    Login
                </Link>
            </div>
            <div className="backgroundContainer" id="intro">
                <div className="thesisTitle">
                    Optimizing Plant Growth with Automated System for Controlled
                    Environment Parameters
                </div>
            </div>
            <div className="introduction">
                <h2>Welcome To Our Website</h2>
                <p>
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
