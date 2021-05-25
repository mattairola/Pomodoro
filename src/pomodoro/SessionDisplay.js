import React from "react";
import { minutesToDuration, secondsToDuration } from "../utils/duration";
import TimeRemaining from "./TimeRemaining";
import ProgressBar from "./ProgressBar";


export default function SessionDisplay({  
    focusDuration, 
    breakDuration,
    hidden,
    currentState,
    paused,
    progress,
    focusCount,
    breakCount,
    stopped,
}) {

    function titleDisplay({ currentState, focusDuration, breakDuration }) {
        if(currentState === "Focusing") {
            return `Focusing for ${minutesToDuration(focusDuration)} minutes`
        }if(currentState === "On Break") {
            return `On Break for ${minutesToDuration(breakDuration)} minutes`
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
                {titleDisplay({ currentState, focusDuration, breakDuration })}
            </h2>
            {/* TODO: Update message below correctly format the time remaining in the current session */}
            <p className="lead" data-testid="session-sub-title">
              <TimeRemaining 
                currentState={currentState}
                focusCount={focusCount}
                breakCount={breakCount}
                stopped={stopped}
                paused={paused}
              />{" "} remaining
            </p>
            <h2>{paused}</h2>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <div className="progress" style={{ height: "20px" }}>
              <ProgressBar 
                progress={progress}
              />
            </div>
          </div>
        </div>
      </div>
    )
  )
}
