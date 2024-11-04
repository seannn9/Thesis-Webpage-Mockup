import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import "../styles/Login.css";
import plantImg from "../images/plant.jpg";
import { Helmet } from "react-helmet";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    axios.defaults.withCredentials = true;

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("https://thesis-webpage-mockup-api.vercel.app/login", {
                email,
                password,
            })
            .then((result) => {
                console.log(result);
                if (result.data === "Success") {
                    navigate("/#home");
                }
            })
            .catch((err) => console.log(err));
    };
    return (
        <>
            <Helmet>
                <style>
                    {`
                        html, body {
                            height: 100vh;
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
            <Navbar activeLogin="active" />
            <div className="mainContainer">
                <div className="formContainer">
                    <form onSubmit={handleSubmit}>
                        <legend>Login</legend>
                        <label>Email:</label>
                        <br />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <br />
                        <label>Password:</label>
                        <br />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <br />
                        <div className="acceptBox">
                            <input
                                type="checkbox"
                                id="acceptTerms"
                                name="acceptTerms"
                                value="Accept"
                                title="Please accept the terms and conditions to proceed"
                                required
                            />
                            <label htmlFor="acceptTerms" className="terms">
                                Stay signed in?
                            </label>
                        </div>
                        <button
                            type="submit"
                            value="Login"
                            className="loginBtn"
                        >
                            Login
                        </button>
                        {/* <br /> */}
                    </form>
                    <p>
                        Don't have an account?&nbsp;
                        <Link to="/register">Register</Link>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Login;
