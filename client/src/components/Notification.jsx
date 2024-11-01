import "../styles/Notification.css";
import propTypes from "prop-types";

function Notification(props) {
    return (
        <>
            <div className="notificationSidebar" id={props.status}>
                <h3>Notifications</h3>
            </div>
        </>
    );
}

Notification.propTypes = {
    status: propTypes.string.isRequired,
};

export default Notification;
