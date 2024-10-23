import "../styles/Parameters.css";
import propTypes from "prop-types";

function ParamCard(props) {
    return (
        <>
            <div className={props.className}>
                <p>{props.cardTitle}</p>
                <img src={props.src} alt={props.altName} />
                <br />
                <br />
                <br />
                <br />
                <form action="" method="POST">
                    <label>Input a Value</label>
                    <br />
                    <input
                        type="text"
                        name={props.name}
                        className={props.inputClassName}
                        placeholder="Value"
                        required
                    />
                    <br />
                    <br />
                    <br />
                    <button className="submit" name="submit" value="Submit">
                        Save
                    </button>
                </form>
            </div>
        </>
    );
}

ParamCard.propTypes = {
    cardTitle: propTypes.string,
    name: propTypes.string,
    src: propTypes.string,
    altName: propTypes.string,
    className: propTypes.string,
    inputClassName: propTypes.string,
};

export default ParamCard;
