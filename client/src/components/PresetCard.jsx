import propTypes from "prop-types";
import settingImg from "../images/setting.png";
function PresetCard(props) {
    return (
        <>
            <div className={props.className}>
                <p className="cardTitle">{props.presetTitle}</p>
                <br />
                <br />
                <br />
                <p>Humidity:</p>
                <p>Temperature:</p>
                <p>Light:</p>
                <p>Soil Moisture:</p>
                <br />
                <br />
                <br />

                <div className="buttons">
                    <button id="del">DELETE</button>
                    <button id="edit">
                        <img src={settingImg} />
                    </button>
                    <button id="load">LOAD</button>
                </div>
            </div>
        </>
    );
}

PresetCard.propTypes = {
    className: propTypes.string,
    presetTitle: propTypes.string,
    src: propTypes.string,
};

export default PresetCard;
