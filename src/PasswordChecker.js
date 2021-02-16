import React, { useState } from "react";
import styles from "./PasswordChecker.module.css";

const PasswordChecker = () => {
  const [pass, setPass] = useState({ currentPass: "", checkPass: "" });

  return (
    <div className={styles.passwordCheckerContainer}>
      <input
        type="text"
        placeholder="Enter your password"
        onChange={(event) =>
          setPass({ ...pass, currentPass: event.target.value })
        }
        className={styles.input}
      />
      <input
        type="text"
        placeholder="Re-enter your password"
        onChange={(event) =>
          setPass({ ...pass, checkPass: event.target.value })
        }
        className={styles.input}
      />
      <p>
        {pass.checkPass !== "" && pass.currentPass !== pass.checkPass
          ? "Your password is not matching :("
          : null}
      </p>
      <button
        disabled={pass.checkPass !== "" && pass.currentPass !== pass.checkPass}
        onClick={() => console.log(pass.currentPass)}
        className={styles.btn}
      >
        {" "}
        Submit{" "}
      </button>
    </div>
  );
};

export default PasswordChecker;
