
import '../KundenKonto/KundenKonto.css';
import React, { useEffect, useState} from 'react';

function KundenKonto() {
    // Email validation
    const [isValid, setIsValid] = useState(false);
    const [message, setMessage] = useState("");
    // The regular exprssion to validate the email pattern
    // It may not be 100% perfect but can catch most email pattern errors and assures that the form is mostly right
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
    const validateEmail = (event) => {
      const email = event.target.value;
      if (emailRegex.test(email)) {
        setIsValid(true);
        setMessage("Your email looks good!");
      } else {
        setIsValid(false);
        setMessage("Please enter a valid email!");
      }
    };
    // Email validation End
    /************************************************************************************* */
  
    // userName Validation
    const [userName, setUserName] = useState("");
    const [userNameErr, setUserNameErr] = useState({});
    const onSubmit = (e) => {
      e.preventDefault();
      const isValid = userValidation();
    };
    const userValidation = () => {
      const userNameErr = {};
      let isValid = true;
  
      if (userName.trim().length < 4) {
        userNameErr.userNameShort = "Username is too short!";
        isValid = false;
      }
      if (userName.trim().length > 11) {
        userNameErr.userNameLong = "Username is more than 10 characters";
        isValid = false;
      }
      setUserNameErr(userNameErr);
      return isValid;
    };
  
    return (
      <div className="form-container">
        <form className="form" onSubmit={onSubmit}>
          <div className="form-header">
            <h2>Create new Account</h2>
          </div>
          <div className="form-inputs">
            <label className="form-label" id="username">
              Username:
            </label>
            <input
              type="text"
              name="username"
              className="form-input"
              placeholder="Enter your username"
              required
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            <br />
            {Object.keys(userNameErr).map((key) => {
              return <div style={{ color: "red" }}>{userNameErr[key]} </div>;
            })}
          </div>
          <div className="form-inputs">
            <label className="form-label" id="email">
              E-mail:
            </label>
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Enter your E-mail"
              required
              onChange={validateEmail}
            />
            <br/>
            {/*If the entered email is valid, the message will be blue, otherwise it will be red. */}
            <div
              className={`message ${isValid ? "success" : "error"}`}
              
            >
              {message}
            </div>
          </div>
          <div className="form-inputs">
            <label className="form-label">Password:</label>
            <input
              type="password"
              name="password"
              className="form-input"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="form-inputs">
            <label className="form-label">Password confirmation:</label>
            <input
              type="password"
              name="password"
              className="form-input"
              placeholder="Confirm your password"
              required
            />
          </div>
          <button className="btn" type="submit">
            Create Account
          </button>
          <span className="form-input-login">
            Already have an account? Login <a href="#">here</a>{" "}
          </span>
        </form>
      </div>
    );
  }
  export default KundenKonto;
  