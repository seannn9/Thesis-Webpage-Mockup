import { Link } from "react-router-dom";

function Contact() {
    return (
        <>
            <div className="navbar">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link className="active" to="/contact">
                    Contact
                </Link>
                <Link to="/parameters">Parameters</Link>
                <Link to="/presets">Presets</Link>
                <Link className="loginNav" to="/login">
                    Login
                </Link>
            </div>
        </>
    );
}

export default Contact;
