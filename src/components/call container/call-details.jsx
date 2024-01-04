import React from "react";
import "./call-details.css";

const CallDetails = (props) => {
  const timestamp = props.created_at;
  const dateTime = new Date(timestamp);

  const hours = dateTime.getUTCHours();
  const minutes = dateTime.getUTCMinutes();

  return (
    !props.is_archived && (
      <div className="call-details">
        <div className="call-info">
          <div className="call-type-svg-container">
            {props.call_type === "missed" ? (
              <img
                className="call-type-svg"
                src="./public/assets/missed-call.svg"
                alt="Missed Call"
              />
            ) : null}
            {props.call_type === "answered" ? (
              <img
                className="call-type-svg"
                src="./public/assets/incoming.svg"
                alt="Answered Call"
              />
            ) : null}
            {props.call_type === "voicemail" ? (
              <img
                className="call-type-svg"
                src="./public/assets/voicemail.svg"
                alt="Voicemail"
              />
            ) : null}
          </div>
          <div className="caller-details">
            <h1 className="from-number">{props.from}</h1>
            <h3> tried to call on {props.to}</h3>
          </div>
        </div>
        <div className="time-box">
        <img
                className="call-type-svg"
                src="./public/assets/three-dots.svg"
                alt="Three dots"
              />
            {hours + " : " + minutes}
        </div>
      </div>
    )
  );
};

export default CallDetails;
