import React, { useEffect, useState } from "react";
import classNames from "../utils/class-names";
import useInterval from "../utils/useInterval";
import BreakTime from "./BreakTime";
import FocusTime from "./FocusTime";
import SessionDisplay from "./SessionDisplay";

function Pomodoro() {
  // Timer starts out paused
  const [ isTimerRunning, setIsTimerRunning ] = useState(false);
  const [ currentState, setCurrentState ] = useState("Focusing");

  // ToDo: Allow the user to adjust the focus and break duration.
  const [ focusDuration, setFocusDuration ] = useState(25);
  const [ breakDuration, setBreakDuration ] = useState(5);
  const [ focusCount, setFocusCount ] = useState(focusDuration*60)
  const [ breakCount, setBreakCount ] = useState(breakDuration*60)
  const [ disabled, setDisabled ] = useState(true);
  const [ hidden, setHidden ] = useState(false);
  const [ progress, setProgress ] = useState(0);
  const [ stopped, setStopped ] = useState(true);
  const [ paused, setPaused ] = useState("");
  const [ focusTime, setFocusTime ] = useState(focusDuration)
    
//adjustment of the focusDuration & breakDuration
    function decreaseFocus() {
      setFocusDuration(focusDuration - 5);
      setFocusCount((focusDuration - 5)*60)
    }
    function increaseFocus() {
      setFocusDuration(focusDuration + 5);
      setFocusCount((focusDuration + 5)*60)
    }
    function decreaseBreak() {
      setBreakDuration(breakDuration - 1);
      setBreakCount((breakDuration - 1)*60)
    }
    function increaseBreak() {
      setBreakDuration(breakDuration + 1);
      setBreakCount((breakDuration + 1)*60);
    }

    useInterval(() => {
        if(focusCount > 0 && currentState==="Focusing"){
          setFocusCount((prevCount) => prevCount - 1);
          setProgress(100*(focusDuration*60 - focusCount) / (focusDuration*60));

        }else if(breakCount > 0 && currentState==="On Break"){
          setBreakCount((prevCount) => prevCount - 1);  
          setProgress(100*(breakDuration*60 - breakCount) / (breakDuration*60));

        }else if(currentState === "Focusing" && focusCount === 0) {
          new Audio("https://bigsoundbank.com/UPLOAD/mp3/1482.mp3").play();
          setProgress(0)
          setCurrentState("On Break")
          setFocusTime(breakDuration)
          setBreakCount(breakDuration*60)
          console.log("BREAK")
          
        }else if(currentState === "On Break" && focusCount === 0){
          new Audio("https://bigsoundbank.com/UPLOAD/mp3/1482.mp3").play();
          setProgress(0)
          setCurrentState("Focusing")
          setFocusTime(focusDuration)
          setFocusCount(focusDuration*60)
          console.log(focusTime)
        }
      },
      isTimerRunning ? 1000 : null
    );

    useEffect(() => {
      setFocusTime(focusDuration);
    }, [focusDuration]);


  //Play/Pause & Stop 
    function playPause() {
      setIsTimerRunning((prevState) => !prevState);
      setStopped(false)
      setDisabled(false)
      if(!isTimerRunning) {
        setHidden(true);
        setPaused("")
      }else{
        setPaused("PAUSED");
      }
    }

    function stop() {
      setFocusCount(focusDuration * 60)
      setBreakCount(breakDuration * 60)
      setIsTimerRunning(false);
      setHidden(false);
      setCurrentState("Focusing");
      setProgress(0);
      setDisabled(true);
    }


  return (
    <div className="pomodoro">
      <div className="row">
        <div className="col">
          <div className="input-group input-group-lg mb-2">
            <FocusTime
              increaseFocus={increaseFocus}
              decreaseFocus={decreaseFocus}
              focusDuration={focusDuration}
              isTimerRunning={isTimerRunning}
            />
          </div>
        </div>
        <div className="col">
          <div className="float-right">
            <div className="input-group input-group-lg mb-2">
              <BreakTime
                breakDuration={breakDuration}
                increaseBreak={increaseBreak}
                decreaseBreak={decreaseBreak}
                isTimerRunning={isTimerRunning}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div
            className="btn-group btn-group-lg mb-2"
            role="group"
            aria-label="Timer controls"
          >
            <button
              type="button"
              className="btn btn-primary"
              data-testid="play-pause"
              title="Start or pause timer"
              onClick={playPause}
            > 
              <span
                className={classNames({
                  oi: true,
                  "oi-media-play": !isTimerRunning,
                  "oi-media-pause": isTimerRunning,
                })}
              />
            </button>
            {/* TODO: Implement stopping the current focus or break session. and disable the stop button when there is no active session */}
            {/* TODO: Disable the stop button when there is no active session */}
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="stop"
              title="Stop the session"
              onClick={stop}
              disabled={disabled}
            >
              <span className="oi oi-media-stop" />
            </button>
          </div>
        </div>
      </div>
      <div>
      {/* TODO: This area should show only when there is an active focus or break - i.e. the session is running or is paused */}
        <SessionDisplay 
          disabled={disabled}
          hidden={hidden}
          currentState={currentState}
          focusDuration={focusDuration}
          breakDuration={breakDuration}
          isTimerRunning={isTimerRunning}
          progress={progress}
          focusCount={focusCount}
          breakCount={breakCount}
          stopped={stopped}
          paused={paused}
        />
      </div>
    </div>
  );
}

export default Pomodoro;
