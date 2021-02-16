import React, { useState } from "react";
import styles from "./Toast.module.css";

const Toast = () => {
  const [showToast, setShowToast] = useState(false);
  return (
    <div className={styles.toastContainer}>
      <button onClick={() => setShowToast(!showToast)} className={styles.btn}>
        {showToast ? "Hide" : "Show"} Toast
      </button>
      {showToast && <h2>Hi this is your toast message</h2>}
    </div>
  );
};

export default Toast;
