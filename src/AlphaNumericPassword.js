import React, { useState } from "react";
import styles from "./AlphaNumericPassword.module.css";

const AlphaNumbericPassword = () => {
  const [pass, setPass] = useState("");

  const isPasswordValid = (pass) => {
    let charCount = 0,
      numCount = 0;
    for (let char of pass) {
      if (isNaN(char)) {
        charCount++;
      } else {
        numCount++;
      }
      if (charCount > 0 && numCount > 0) {
        return true;
      }
    }

    return false;
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Enter your password"
        onChange={(event) => setPass(event.target.value)}
      />
      <p>
        {isPasswordValid(pass)
          ? "Your password is valid"
          : "Your password is not valid"}
      </p>
    </div>
  );
};

export default AlphaNumbericPassword;
