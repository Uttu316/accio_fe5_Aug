import { useState } from "react";
import StopWatch from "./stopWatch";
import styles from "./stopWatch.module.css";

const StopWatchBox = () => {
  const [showWatch, setShowWatch] = useState(false);

  const onHide = () => {
    setShowWatch(false);
  };

  const onShow = () => {
    setShowWatch(true);
  };
  return (
    <div className={styles.stopwatch_box}>
      <h2 className={styles.stopwatch_heading}>Stop Watch</h2>
      {showWatch && (
        <button
          className={`${styles.stopwatch_box_action} ${styles.watch_action_hide}`}
          onClick={onHide}
        >
          Hide Watch
        </button>
      )}
      {!showWatch && (
        <button
          className={`${styles.stopwatch_box_action} ${styles.watch_action_show}`}
          onClick={onShow}
        >
          Show Watch
        </button>
      )}
      {showWatch && <StopWatch />}
    </div>
  );
};
export default StopWatchBox;
