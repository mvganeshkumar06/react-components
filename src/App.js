import React, { useState } from "react";
import styles from "./App.module.css";
import Counter from "./Counter";
import TweetPost from "./TweetPost";
import PasswordChecker from "./PasswordChecker";
import AlphaNumbericPassword from "./AlphaNumericPassword";
import PasswordHide from "./PasswordHide";
import DesignerTool from "./DesignerTool";
import Cart from "./Cart";
import Toast from "./Toast";
import Todo from "./Todo";

export default function App() {
  const components = {
    Counter: <Counter />,
    TweetPost: <TweetPost />,
    PasswordChecker: <PasswordChecker />,
    AlphaNumericPassword: <AlphaNumbericPassword />,
    PasswordHide: <PasswordHide />,
    DesinerTool: <DesignerTool />,
    Cart: <Cart />,
    Toast: <Toast />,
    Todo: <Todo />
  };

  let initialStateObject = {};

  Object.keys(components).forEach((component) => {
    initialStateObject[component] = false;
  });

  const [isVisibleComponent, setIsVisibleComponent] = useState(
    initialStateObject
  );

  const showComponentHandler = (component) => {
    if (isVisibleComponent[component]) {
      isVisibleComponent[component] = false;
    } else {
      isVisibleComponent[component] = true;
    }
    setIsVisibleComponent({ ...isVisibleComponent });
  };

  return (
    <div className={styles.appContainer}>
      <h1>React practice components</h1>
      <div className={styles.btnContainer}>
        {Object.keys(isVisibleComponent).map((component) => {
          return (
            <button
              key={component}
              onClick={() => showComponentHandler(component)}
              className={styles.btn}
            >
              Show {component}
            </button>
          );
        })}
      </div>
      {Object.keys(components).map((component) => {
        return (
          isVisibleComponent[component] && (
            <div key={component}>{components[component]}</div>
          )
        );
      })}
    </div>
  );
}
