import React from "react";
import { minutesToDuration, secondsToDuration } from "../utils/duration";


export default function Display({  
    focusDuration, 
    breakDuration,
    hidden,
    currentState,
    focusCount,
    breakCount,
    paused,
    progress,
    stopped
}) {

    function displayMain({ currentState, focusDuration, breakDuration }) {
        if(currentState === "Focusing") {
            return `Focusing for ${minutesToDuration(focusDuration)} minutes`
        }if(currentState === "On Break") {
            return `On Break for ${minutesToDuration(breakDuration)} minutes`
        }
    }

    function ticker({ stopped, currentState, focusCount, breakCount }){
      if(stopped) {
        return null;
      }else{
        if(currentState === "Focusing") {
            return secondsToDuration(focusCount)
        }if(currentState === "On Break") {
            return secondsToDuration(breakCount)
        }
      }
    }

    return (
        hidden && (
        <div>
        {/* TODO: This area should show only when there is an active focus or break - i.e. the session is running or is paused */}
        <div className="row mb-2">
          <div className="col">
            {/* TODO: Update message below to include current session (Focusing or On Break) total duration */}
            <h2 data-testid="session-title">
                {displayMain({ currentState, focusDuration, breakDuration })}
            </h2>
            {/* TODO: Update message below correctly format the time remaining in the current session */}
            <p className="lead" data-testid="session-sub-title">
                {ticker ({stopped, currentState, focusCount, breakCount})} remaining
            </p>
            <h2>{paused}</h2>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <div className="progress" style={{ height: "20px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={progress}// TODO: Increase aria-valuenow as elapsed time increases
                style={{ width: `${progress}%` }} // TODO: Increase width % as elapsed time increases
              />
            </div>
          </div>
        </div>
      </div>
    )
    )
}
