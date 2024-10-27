import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import "../styles/Login.css";
import plantImg from "../images/plant.jpg";
import { Helmet } from "react-helmet";

function Login() {
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
                    <form action="" method="POST">
                        <legend>Sign Up</legend>
                        <label>Email:</label>
                        <br />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                        />
                        <br />
                        <label>Password:</label>
                        <br />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
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
                                I accpet all terms & condtions
                            </label>
                        </div>
                        <button
                            type="submit"
                            value="Login"
                            className="loginBtn"
                        >
                            Register
                        </button>
                        <br />
                        <br />
                    </form>
                    <p>
                        Already have an account?&nbsp;
                        <Link to="/">Login</Link>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Login;
