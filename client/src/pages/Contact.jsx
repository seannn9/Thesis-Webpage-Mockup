import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import instagram from "../images/instagram.png";
import github from "../images/github.png";

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
                    <form
                        action="https://formsubmit.co/seanulric9@gmail.com"
                        method="POST"
                    >
                        <input
                            type="text"
                            name="Name"
                            placeholder="Name"
                            required
                        />
                        <br />
                        <input
                            type="hidden"
                            name="_subject"
                            value="Optimizing Plant Growth Inquiry"
                        ></input>
                        <input
                            type="hidden"
                            name="_next"
                            value="https://optimizingplantgrowth.vercel.app/#home"
                        ></input>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                        />
                        <br />
                        <textarea
                            name="message"
                            placeholder="Message"
                            required
                            style={{
                                resize: "none",
                            }}
                        ></textarea>
                        <br />
                        <button type="submit" className="submit">
                            Submit
                        </button>
                    </form>
                </div>
                <div className="socialMedia">
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={facebook} alt="Facebook" />
                    </a>
                    <a href="https://x.com" target="_blank" rel="noreferrer">
                        <img src={twitter} alt="Twitter" />
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={instagram} alt="Instagram" />
                    </a>
                    <a
                        href="https://github.com/seannn9/Thesis-Webpage-Mockup"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={github} alt="Github" />
                    </a>
                </div>
            </div>
        </>
    );
}

export default Contact;
