import React from "react";

export default function ProgressBar({ progress }){
    return (
        <div
            className="progress-bar"
            role="progressbar"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow={progress}// TODO: Increase aria-valuenow as elapsed time increases
            style={{ width: `${progress}%` }} // TODO: Increase width % as elapsed time increases
        />
    )
}