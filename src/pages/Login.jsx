import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Login() {
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
                <Link to="/presets">Presets</Link>
                <Link className="active loginNav" to="/login">
                    Login
                </Link>
            </div>
        </>
    );
}

export default Login;
