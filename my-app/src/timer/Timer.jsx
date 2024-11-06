import React, { useState, useEffect } from 'react';

function Timer() {
  const [time, setTime] = useState(0); // Start from 0
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval); // Cleanup on unmount
  }, [isActive]);

  const startTimer = () => setIsActive(true);
  const stopTimer = () => setIsActive(false);
  const resetTimer = () => {
    setIsActive(false);
    setTime(0);
  };

  return (
    <div>
      <h1>Timer: {time}s</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default Timer;
