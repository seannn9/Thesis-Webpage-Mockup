import "../styles/Parameters.css";
import propTypes from "prop-types";
function Card(props) {
    return (
        <>
            <div className={props.className}>
                <p>HUMIDITY</p>
                <img src={props.src} alt={props.altName} />
                <br />
                <br />
                <br />
                <br />
                <form action="">
                    <label htmlFor="">Input a Value</label>
                    <br />
                    <input
                        type="text"
                        name={props.name}
                        className={props.inputClassName}
                        placeholder="Value"
                    />
                </form>
            </div>
        </>
    );
}

Card.propTypes = {
    name: propTypes.string,
    src: propTypes.string,
    altName: propTypes.string,
    className: propTypes.string,
    inputClassName: propTypes.string,
};

export default Card;
