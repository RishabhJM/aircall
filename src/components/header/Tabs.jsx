import React from "react";

import "./Tabs.css"

const Tabs = () => {
    return (
        <div className="tabs-container">
            <div className="tabs-display">
                <img src="./public/assets/phone.svg" className="svg-icons"></img>
                <p className="activity-text">Activity</p>
            </div>
            <div className="tabs-buttons">
                <p className="tabs-button-text">Inbox</p>
                <p className="tabs-button-text">All Calls</p>
                <img src="./public/assets/equalizer.svg" className="svg-icons"></img>
            </div>
        </div>
    );
}

export default Tabs;