import React, {useState} from "react";
import styles from "./DarkMode.module.css";

const DarkMode=()=>{

    const [isDark,setIsDark]=useState(false);

    return (
        <div className={isDark?styles.darkModeContainer:styles.lightModeContainer}>
            <h1 className={isDark?styles.darkText:styles.lightText}>This text is in {isDark?"dark":"light"} mode</h1>
            <button onClick={()=>setIsDark(!isDark)} className={isDark?styles.darkBtn:styles.lightBtn}>Switch to {isDark?"Light":"Dark"} Mode</button>
        </div>
    )
}

export default DarkMode;