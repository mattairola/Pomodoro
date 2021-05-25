import React from "react";
import { minutesToDuration } from "../utils/duration";

export default function BreakTime({
    decreaseBreak,
    increaseBreak,
    breakDuration,
    isTimerRunning
}) {
    
    return (
        <>
        <span className="input-group-text" data-testid="duration-break">
        {/* TODO: Update this text to display the current focus session duration */}
        Break Duration: {minutesToDuration(breakDuration)}
            </span>
            <div className="input-group-append">
                <button
                    disabled={isTimerRunning || breakDuration === 1}
                    type="button"
                    className="btn btn-secondary"
                    data-testid="decrease-break"
                    onClick={decreaseBreak}       
                >
                <span className="oi oi-minus" />
                </button>

                <button
                    disabled={isTimerRunning || breakDuration === 15}
                    type="button"
                    className="btn btn-secondary"
                    data-testid="increase-break"
                    onClick={increaseBreak}    
                >
                <span className="oi oi-plus" />
                </button>
            </div>
        </>
    )
}

