import React, { useState, useEffect } from 'react';

function Stopwatch() {
  const [time, setTime] = useState(0); // State to store time in milliseconds
  const [isRunning, setIsRunning] = useState(false); // State to check if stopwatch is running

  // Calculate minutes and seconds
  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time % 60000) / 1000);

  // Method to start and stop the timer
  const startAndStop = () => {
    setIsRunning(!isRunning);
  };

  // Method to reset the timer back to 0 and stop it
  const reset = () => {
    setTime(0);
    setIsRunning(false);
  };

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      // Update time by adding 1000ms (1 second) every interval
      intervalId = setInterval(() => setTime(prevTime => prevTime + 1000), 1000);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  return (
    <div style={{ padding: "20px"}}>
      <h1>Stopwatch</h1>
      <p style={{ fontSize: "25px" }}>
        Time: {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </p>
      <button onClick={startAndStop} >
        {isRunning ? "Stop" : "Start"}
      </button>
      <button onClick={reset} >
        Reset
      </button>
    </div>
  );
}

export default Stopwatch;

