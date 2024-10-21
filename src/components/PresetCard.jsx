import propTypes from "prop-types";

function PresetCard(props) {
    return (
        <>
            <div className={props.className}>
                <p>{props.presetTitle}</p>
                <br />
                <br />
                <br />
                <br />
                <img src={props.src} />
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
