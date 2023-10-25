import React from "react";
import "./style.scss";

const ProgressBar = ({completed, total}) => {
    const progress = (completed / total) * 100;
    return (
        <div className="progress-bar">
            <div
                className="progress"
                style={{ width: `${progress}%`}}
            ></div>
        </div>
    );
};

export default  ProgressBar;