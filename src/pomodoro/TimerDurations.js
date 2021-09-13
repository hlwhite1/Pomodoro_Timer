import React from "react";
import { minutesToDuration } from "../utils/duration";

function TimerDurations({ timerSettings, setTimerSettings }) {
  const {
    focusDuration,
    breakDuration,
    focusInSeconds,
    breakInSeconds,
    activeSession,
  } = timerSettings;
  return (
    <div className="row">
      <div className="col">
        <div className="input-group input-group-lg mb-2">
          <span className="input-group-text" data-testid="duration-focus">
            Focus Duration: {minutesToDuration(focusDuration)}
          </span>
          <div className="input-group-append">
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="decrease-focus"
              // when clicked, this button will decrease focus time by 5 minutes
              // minimum focus time is 5:00
              onClick={() => {
                setTimerSettings({
                  ...timerSettings,
                  focusDuration: Math.min(
                    Math.max(parseInt(focusDuration - 5), 5),
                    60
                  ),
                  focusInSeconds: Math.min(
                    Math.max(parseInt(focusInSeconds - 300), 300),
                    3600
                  ),
                });
              }}
              disabled={activeSession}
            >
              <span className="oi oi-minus" />
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="increase-focus"
              // when clicked, this button will increase focus time by 5 minutes
              // maximum focus time is 60:00
              onClick={() => {
                setTimerSettings({
                  ...timerSettings,
                  focusDuration: Math.min(
                    Math.max(parseInt(focusDuration + 5), 5),
                    60
                  ),
                  focusInSeconds: Math.min(
                    Math.max(parseInt(focusInSeconds + 300), 300),
                    3600
                  ),
                });
              }}
              disabled={activeSession}
            >
              <span className="oi oi-plus" />
            </button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="float-right">
          <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" data-testid="duration-break">
              Break Duration: {minutesToDuration(breakDuration)}
            </span>
            <div className="input-group-append">
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="decrease-break"
                // when clicked, this button will decrease break time by 1 minute
                // minimum break time is 1:00
                onClick={() => {
                  setTimerSettings({
                    ...timerSettings,
                    breakDuration: Math.min(
                      Math.max(parseInt(breakDuration - 1), 1),
                      15
                    ),
                    breakInSeconds: Math.min(
                      Math.max(parseInt(breakInSeconds - 60), 60),
                      900
                    ),
                  });
                }}
                disabled={activeSession}
              >
                <span className="oi oi-minus" />
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="increase-break"
                // when clicked, this button will increase break time by 1 minute
                // maximum break time is 15:00
                onClick={() => {
                  setTimerSettings({
                    ...timerSettings,
                    breakDuration: Math.min(
                      Math.max(parseInt(breakDuration + 1), 1),
                      15
                    ),
                    breakInSeconds: Math.min(
                      Math.max(parseInt(breakInSeconds + 60), 60),
                      900
                    ),
                  });
                }}
                disabled={activeSession}
              >
                <span className="oi oi-plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimerDurations;
