import React, { useState, useEffect } from "react";
import Select from "./Select";
import Button from "./Button";

export default function Timer() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      clearInterval(interval);

      if (seconds === 0) {
        if (minutes !== 0) {
          setSeconds(59);
          setMinutes(minutes - 1);
        } else {
          console.log("DONE");
        }
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);
  }, [seconds]);

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <div className="pomodoro">
      <Select />
      <Button />
      <div className="timer">
        {timerMinutes}:{timerSeconds}
      </div>
    </div>
  );
}
