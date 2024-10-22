import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import instagram from "../images/instagram.png";

function Contact() {
    return (
        <>
            <div className="contactContainer" id="contact">
                <h2>Contact Us</h2>
                <p>
                    Feel free to reach out to us at any time for any questions
                    or inquiries.
                </p>
                <div className="contactForm">
                    <form>
                        <input type="text" placeholder="Name" required />
                        <br />
                        <input type="email" placeholder="Email" required />
                        <br />
                        <textarea
                            placeholder="Message"
                            required
                            style={{
                                resize: "none",
                                width: "200px",
                                height: "100px",
                            }}
                        ></textarea>
                        <br />
                        <button type="submit" className="submit">
                            Submit
                        </button>
                    </form>
                </div>
                <div className="socialMedia">
                    <a href="#" target="_blank" rel="noreferrer">
                        <img src={facebook} alt="Facebook" />
                    </a>
                    <a href="#" target="_blank" rel="noreferrer">
                        <img src={twitter} alt="Twitter" />
                    </a>
                    <a href="#" target="_blank" rel="noreferrer">
                        <img src={instagram} alt="Instagram" />
                    </a>
                </div>
            </div>
        </>
    );
}

export default Contact;
