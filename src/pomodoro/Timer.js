import React from "react";
import { minutesToDuration } from "../utils/duration";

function Timer({
    decreaseFocus,
    increaseFocus,
    decreaseBreak,
    increaseBreak,
    breakDuration,
    focusDuration,
    isTimerRunning
}){
    return (
        <div className="row">
        <div className="col">
        <div className="input-group input-group-lg mb-2">
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
            </div>
        </div>
        <div className="row">
        <div className="col">
        <div className="input-group input-group-lg mb-2">
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
            </div>
        </div>
        </div>
        </div>
    )
}

export default Timer;
