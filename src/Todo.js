import React, { useState } from "react";
import styles from "./Todo.module.css";

const Todo = () => {
  const [text, setText] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const [strikedItems, setStrikedItems] = useState({});

  const addBtnHandler = (event) => {
    toDoList.push(event.target.previousSibling.value);
    setToDoList([...toDoList]);
  };

  const strikItemHandler = (item) => {
    if (strikedItems[item]) {
      delete strikedItems[item];
      const filteredToDoList = toDoList.filter((toDoItem) => {
        return toDoItem !== item;
      });
      setToDoList(filteredToDoList);
    } else {
      strikedItems[item] = true;
      setStrikedItems({ ...strikedItems });
    }
  };

  return (
    <div className={styles.toDoContainer}>
      <input
        type="text"
        placeholder="Enter an item"
        className={styles.input}
        onChange={(event) => setText(event.target.value)}
        value={text}
      />
      <button onClick={(event) => addBtnHandler(event)} className={styles.btn}>
        Add
      </button>
      <div className={styles.toDoList}>
        {toDoList.map((item) => {
          return (
            <p
              key={item}
              onClick={() => strikItemHandler(item)}
              className={strikedItems[item] ? styles.strikedItem : styles.item}
            >
              {item}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
