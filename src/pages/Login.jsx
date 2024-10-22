import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Navbar from "../components/Navbar";

function Login() {
    return (
        <>
            <Navbar activeLogin="active" />
            <div className="mainContainer"></div>
        </>
    );
}

export default Login;
