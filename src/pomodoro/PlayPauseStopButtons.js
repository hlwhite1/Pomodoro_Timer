import React from "react";
import classNames from "../utils/class-names";

function PlayPauseStopButtons({
  initialTimerSettings,
  setTimerSettings,
  timerSettings,
}) {
  const { isTimerRunning, activeSession } = timerSettings;
  return (
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
            onClick={() => {
              // when clicked, toggle isTimerRunning (play/pause) and set activeSession to true
              setTimerSettings({
                ...timerSettings,
                isTimerRunning: !isTimerRunning,
                activeSession: true,
              });
            }}
          >
            <span
              className={classNames({
                oi: true,
                "oi-media-play": !isTimerRunning,
                "oi-media-pause": isTimerRunning,
              })}
            />
          </button>
          <button
            type="button"
            data-testid="stop"
            className="btn btn-secondary"
            title="Stop the session"
            disabled={!activeSession}
            onClick={() => {
              // when clicked, reset all values in state to initial values. Will set activeSession to false, and isTimerRunning to false
              setTimerSettings({ ...initialTimerSettings });
            }}
          >
            <span className="oi oi-media-stop" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlayPauseStopButtons;
