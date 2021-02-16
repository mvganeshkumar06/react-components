import React, { useState } from "react";
import styles from "./Counter.module.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.counterContainer}>
      <div>
        <button className={styles.btn} onClick={() => setCount(count+1)}>+</button>
        <button className={styles.btn} onClick={() => setCount(count- 1)}>-</button>
      </div>
      <span className={styles.countValue}>Count {count}</span>
    </div>
  );
};

export default Counter;
