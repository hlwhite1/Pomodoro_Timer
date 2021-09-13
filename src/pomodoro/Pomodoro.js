import React, { useState } from "react";
import useInterval from "../utils/useInterval";
import TimerDurations from "./TimerDurations";
import PlayPauseStopButtons from "./PlayPauseStopButtons";
import SessionDisplay from "./SessionDisplay";

function Pomodoro() {
  // Object to hold all initial values for the state
  const initialTimerSettings = {
    focusDuration: 25,
    breakDuration: 5,
    focusInSeconds: 1500,
    breakInSeconds: 300,
    onBreak: false,
    isTimerRunning: false,
    activeSession: false,
  };

  const [timerSettings, setTimerSettings] = useState({
    ...initialTimerSettings,
  });

  const {
    focusDuration,
    focusInSeconds,
    breakDuration,
    breakInSeconds,
    isTimerRunning,
    onBreak,
  } = timerSettings;

  useInterval(
    () => {
      const timerCountdown = !onBreak
        ? focusInSeconds
        : breakInSeconds;

      /* when countdown hits 0, reset both focusInSeconds and breakInSeconds, based on the current value of focusDuration and breakDuration. 
      Additionally, toggle value of onBreak and play audio clip */
      if (timerCountdown === 0) {
        setTimerSettings({
          ...timerSettings,
          focusInSeconds: focusDuration * 60,
          breakInSeconds: breakDuration * 60,
          onBreak: !onBreak,
        });
        new Audio(`https://bigsoundbank.com/UPLOAD/mp3/1482.mp3`).play();


        // tick down the appropriate timer each second by 1
      } else if (timerCountdown > 0 && !onBreak) {
        setTimerSettings({
          ...timerSettings,
          focusInSeconds: focusInSeconds - 1,
        });
      } else if (timerCountdown > 0 && onBreak) {
        setTimerSettings({
          ...timerSettings,
          breakInSeconds: breakInSeconds - 1,
        });
      }
    },
    isTimerRunning ? 1000 : null
  );

  return (
    <div className="pomodoro">
      <TimerDurations
        timerSettings={timerSettings}
        setTimerSettings={setTimerSettings}
      />
      <PlayPauseStopButtons
        timerSettings={timerSettings}
        initialTimerSettings={initialTimerSettings}
        setTimerSettings={setTimerSettings}
      />
      <SessionDisplay timerSettings={timerSettings} />
    </div>
  );
}

export default Pomodoro;
