import React from "react";
import { secondsToDuration } from "../utils/duration";

export default function TimeRemaining({ 
    currentState, 
    focusCount, 
    breakCount,
    paused,
    stopped,
    }){

    if(stopped) {
      return null;
    }else{
      if(currentState === "Focusing") {
          return secondsToDuration(focusCount)
      }if(currentState === "On Break") {
          return secondsToDuration(breakCount)
      }
    }

  return (
    <>
    {/* TODO: Update message below correctly format the time remaining in the current session */}
        <p className="lead" data-testid="session-sub-title">
        {TimeRemaining}
        </p>
        <h2>{paused}</h2>
    </>
    )
}