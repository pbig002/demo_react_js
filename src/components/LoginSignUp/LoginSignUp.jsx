import React from "react";
import mail_icon from "";
import unlock_icon from "./assets/images/unlock_icon.png";
import user_icon from "./assets/images/user_icon.png";
import Button from "@mui/material/Button";
import { CoreConcept } from "../CoreConcept.jsx";
function Login() {
  return (
    <div className="container">
      <Button>Button</Button>
      <CoreConcept
        title="Hello World"
        description="RHis is djsfjksdf "
        image={mail_icon}
      />
      <div className="header">
        <div className="text"> Sign Up</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="" />
          <input type="text" />
        </div>
        <div className="input">
          <img src={mail_icon} alt="" />
          <input type="email" />
        </div>
        <div className="input">
          <img src={unlock_icon} alt="" />
          <input type="password" />
        </div>
        <div className="forgot-password">
          Lost Password? <span>Click here?</span>
        </div>
        <div className="submit-container">
          <div className="submit">Sign Up</div>
          <div className="submit">Login</div>
        </div>
      </div>
    </div>
  );
}
const LoginSignUp = () => {
  return <Login />;
};

export default LoginSignUp;
