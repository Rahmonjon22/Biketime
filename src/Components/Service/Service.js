import React, { useState } from "react";
import './Service.css';

function Service() {
    const [isValid, setIsValid] = useState(false);
    const [message, setMessage] = useState("");
  
    // The regular exprssion to validate the email pattern
    // It may not be 100% perfect but can catch most email pattern errors and assures that the form is mostly right
    const emailRegex = /\S+@\S+\.\S+/;
  
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

    return (
        <div className="Service-page">
        <h1 >this is Service page</h1>
        <form className="contact">
        <input type="text" placeholder="Your Name" required className="in" />
        <input
          type="email"
          placeholder="Your Email"
          required
          className="in"
          onChange={validateEmail}
        />
        <textarea
          name="message"
          cols="30"
          rows="10"
          placeholder="Message"
          className="message"
          maxLength="160"
          minLength="11"
        ></textarea>
        <button type="submit" className="btn">
          Send Message
        </button>
        {/*If the entered email is valid, the message will be blue, otherwise it will be red. */}
        <div className={`message ${isValid ? "success" : "error"}`}>
          {message}
        </div>
      </form>

    </div>
    );
}
export default Service;