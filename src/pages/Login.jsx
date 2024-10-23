import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import "../styles/Login.css";

function Login() {
    return (
        <>
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
                        <p>
                            Already have an account?&nbsp;
                            <Link to="/">Login</Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;
