import React from "react";
import { minutesToDuration } from "../utils/duration";

export default function FocusTime({
    decreaseFocus,
    increaseFocus,
    focusDuration,
    isTimerRunning
}) {

return (
    <>
    <span className="input-group-text" data-testid="duration-focus">
    {/* TODO: Update this text to display the current focus session duration */}
    Focus Duration: {minutesToDuration(focusDuration)}
        </span>
        <div className="input-group-append">
            <button
                disabled={isTimerRunning || focusDuration === 5}
                type="button"
                className="btn btn-secondary"
                data-testid="decrease-focus"
                onClick={decreaseFocus}       
            >
            <span className="oi oi-minus" />
            </button>

            <button
                disabled={isTimerRunning || focusDuration === 60}
                type="button"
                className="btn btn-secondary"
                data-testid="increase-focus"
                onClick={increaseFocus}    
            >
            <span className="oi oi-plus" />
            </button>
        </div>
    </>
    )
}