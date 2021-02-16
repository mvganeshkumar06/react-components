import React, { useState } from "react";
import styles from "./DesignerTool.module.css";

const DesignerTool = () => {
  const [text, setText] = useState("");
  const [size, setSize] = useState(16);
  return (
    <div className={styles.designerToolContainer}>
      <input
        className={styles.input}
        type="text"
        onChange={(event) => setText(event.target.value)}
        placeholder="Enter your text"
      />
      <div className={styles.btnContainer}>
        <button onClick={() => setSize(size + 8)} className={styles.btn}>
          +
        </button>
        <button onClick={() => setSize(size - 8)} className={styles.btn}>
          -
        </button>
      </div>
      <p style={{ fontSize: `${size}px` }}>{`${text} ${size} px`}</p>
    </div>
  );
};

export default DesignerTool;
