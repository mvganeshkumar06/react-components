import React, { useState } from "react";
import styles from "./TweetPost.module.css";

const TweetPost = () => {
  const [text, setText] = useState({ content: "", count: 0 });

  return (
    <div className={styles.tweetPostContainer}>
      <textarea
        type="text"
        placeholder="What's up?"
        onChange={(event) =>
          setText({
            content: event.target.value,
            count: event.target.value.length
          })
        }
        className={styles.textArea}
      />
      <span className={styles.textLength}>Length {text.count}</span>
      <p className={styles.text}>{text.content}</p>
    </div>
  );
};

export default TweetPost;
