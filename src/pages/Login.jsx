import { Link } from "react-router-dom";

function Login() {
    return (
        <>
            <div className="navbar">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
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
