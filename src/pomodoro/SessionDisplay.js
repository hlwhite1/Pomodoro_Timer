import React from "react";
import { secondsToDuration, minutesToDuration } from "../utils/duration";

function SessionDisplay({ timerSettings }) {
  const {
    isTimerRunning,
    activeSession,
    focusDuration,
    breakDuration,
    focusInSeconds,
    breakInSeconds,
    onBreak,
  } = timerSettings;
  // valueNow determines the percentage of the session that has been completed, and updates as the timer runs
  const valueNow = !onBreak
    ? ((focusDuration * 60 - focusInSeconds) / (focusDuration * 60)) * 100
    : ((breakDuration * 60 - breakInSeconds) / (breakDuration * 60)) * 100;
  return (
    // this div only renders if activeSession is true
    activeSession && (
      <div>
        <div className="row mb-2">
          <div className="col">
            {!onBreak ? (
              <h2 data-testid="session-title">
                Focusing for {minutesToDuration(focusDuration)} minutes
              </h2>
            ) : (
              <h2 data-testid="session-title">
                On Break for {minutesToDuration(breakDuration)} minutes
              </h2>
            )}
            {!onBreak ? (
              <p className="lead" data-testid="session-sub-title">
                {secondsToDuration(focusInSeconds)} remaining
              </p>
            ) : (
              <p className="lead" data-testid="session-sub-title">
                {secondsToDuration(breakInSeconds)} remaining
              </p>
            )}
            {/* PAUSED only displays when the timer is paused */}
            {isTimerRunning ? null : <h2>PAUSED</h2>}
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
                aria-valuenow={valueNow}
                style={{ width: `${valueNow}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default SessionDisplay;
