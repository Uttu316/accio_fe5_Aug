import { useEffect, useState } from "react";
import styles from "./stopWatch.module.css";

let intervalId;
const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [isPaused, setisPaused] = useState(false);

  const onStart = () => {
    setTime((currTime) => currTime + 1);
    intervalId = setInterval(() => {
      console.log("interval runing");
      setTime((currTime) => currTime + 1);
    }, 1000);
  };

  const onPause = () => {
    clearInterval(intervalId);
    setisPaused(true);
  };

  const onStop = () => {
    clearInterval(intervalId);
    setTime(0);
    setisPaused(false);
  };

  const onResume = () => {
    intervalId = setInterval(() => {
      setTime((currTime) => currTime + 1);
    }, 1000);
    setisPaused(false);
  };

  useEffect(() => {
    // setup function will all after first mount if dependency array is empty
    console.log("Watch Mounted");
    onStart();

    return () => {
      //cleaup function will call before unmount
      console.log("Unmounting");
      clearInterval(intervalId);
    };
  }, []);

  const isStarted = time !== 0;

  return (
    <div className={styles.watch_wrapper}>
      <h1 className={styles.watch_time}>{time}</h1>
      <div className={styles.watch_actions}>
        {!isStarted && (
          <button
            className={`${styles.watch_action} ${styles.watch_start}`}
            onClick={onStart}
          >
            Start
          </button>
        )}
        {isStarted && (
          <>
            {!isPaused && (
              <button
                className={`${styles.watch_action} ${styles.watch_pause}`}
                onClick={onPause}
              >
                Pause
              </button>
            )}
            {isPaused && (
              <button
                className={`${styles.watch_action} ${styles.watch_resume}`}
                onClick={onResume}
              >
                Resume
              </button>
            )}
            <button
              className={`${styles.watch_action} ${styles.watch_stop}`}
              onClick={onStop}
            >
              Stop
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default StopWatch;
