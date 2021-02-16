import React, { useState } from "react";
import styles from "./PasswordHide.module.css";

const PasswordHide = () => {
  const [pass, setPass] = useState("");
  const [showPass, setShowPass] = useState(false);

  return (
    <div className={styles.passwordHideContainer}>
      <input
        type="text"
        placeholder="Enter your password"
        onChange={(event) => setPass(event.target.value)}
        value={showPass ? pass : "*".repeat(pass.length)}
        className={styles.input}
      />
      <button onClick={() => setShowPass(!showPass)} className={styles.btn}>
        {showPass ? "Hide" : "Show"} password
      </button>
    </div>
  );
};

export default PasswordHide;
