import React,{useState,useEffect} from 'react'

function Stopwatch() {

     const [time,setTime] = useState(0); // state to store time
     
     const [isRunning, setIsRunning] = useState(false);  // state to check stopwatch running or not

     // 1 minute = 60 seconds.
     // 1 minute in milliseconds = 60,000 ms.
     // 60 minutes (1 hour) = 60 × 60,000 = 3,600,000 milliseconds.

    const minutes = Math.floor((time % 360000) / 6000);

    const seconds = Math.floor((time % 6000) / 100);

     // Method to start and stop timer
     const startAndStop = () => {
       setIsRunning(!isRunning);
     };

    // Method to reset timer back to 0
    const reset = () => {
       setTime(0);
    };

    useEffect(() => {
        let intervalId;
        if (isRunning) {
          // setting time from 0 to 1 every 10 milisecond 
          intervalId = setInterval(() => setTime(time + 1), 10);
        }
        return () => clearInterval(intervalId);
      }, [isRunning, time]);

  return (
    <div style={
        {
            padding:"20px"
        }
    }> 
        <h1>Stopwatch</h1>
        <p style={{
            fontSize: "25px"
        }}>
            Time: {minutes.toString().padStart(2, "0")}:
            {seconds.toString().padStart(2, "0")}

        </p>
       
        <button onClick={startAndStop}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button onClick={reset}>
          Reset
        </button>
        
    </div>
  )
}

export default Stopwatch