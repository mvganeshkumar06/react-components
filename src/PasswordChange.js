import React, { useState } from "react";
import PasswordChecker from "./PasswordChecker";

const PasswordChange = () => {
  const [pass, setPass] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Re-enter your password"
        onChange={(event) =>
          setPass({ ...pass, checkPass: event.target.value })
        }
        style={{ margin: "5px" }}
      />
      <p>
        {pass.checkPass !== "" && pass.currentPass !== pass.checkPass
          ? "Your password is not matching :("
          : null}
      </p>
      <PasswordChecker />
      <button onClick={() => console.log(pass)}>Change password</button>
      <p>Text</p>
    </div>
  );
};

export default PasswordChange;
