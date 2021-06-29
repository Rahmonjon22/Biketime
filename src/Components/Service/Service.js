import React, { useState } from "react";
import "./Service.css";
import bike1 from "./images/Bike.jpg";

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
      <h1>this is Service page</h1>
      <h2 className="bike-h2">here you can find help if you are having issues with your Bike, you can select the parts you are having issues with and contact us and one of our team members will be glad to help you </h2>
      <form className="contact">
        <input type="text" placeholder="Your Name" required className="in" />
        <input
          type="email"
          placeholder="Your Email"
          required
          className="in"
          onChange={validateEmail}
        />
        <label for="bikes">Help for:</label>
        <h3 className="bike-h3">please take a look at the bike example below and locate where the repairing is needed</h3>
        <select id="bikes" name="bikes" className="options">
          <option value="Frame">Frame</option>
          <option value="Bolts">Bolts</option>
          <option value="Stem">Chain</option>
          <option value="Drop handlebar">Pedal</option>
          <option value="Brake hood">Brake hood</option>
          <option value="Brake shift lever">Brake and shift lever</option>
          <option value="Disc-brakes">Disc brakes</option>
          <option value="Quick release skewer">Quick release skewer</option>
          <option value="Wheel hub">Wheel hub</option>
          <option value="Rim">Rim</option>
          <option value="Valve stem">Valve stem</option>
          <option value="Chain">Chain</option>
          <option value="Chainrings">Chainrings</option>
          <option value="Pedal crank arm">Pedal crank arm</option>
          <option value="Pedal">Pedal</option>
          <option value="Tyre">Tyre</option>
          <option value="Spoke">Spoke</option>
          <option value="Rear derailleur">Rear derailleur</option>
          <option value="Rear sprockets">Rear sprockets</option>
          <option value="Gear cable">Gear cable</option>
          <option value="Calliper brake">Calliper brake</option>
          <option value="Seatpost clamp">Seatpost clamp</option>
          <option value="Seatpost">Seatpost</option>
          <option value="Seat clamp">Seat clamp</option>
          <option value="Saddle">Saddle</option>
          <option value="Brake cable">Brake cable</option>
          <option value="Front derailleur">Front derailleur</option>
         
          
        </select>
        <div className="bike-parts"><img src={bike1} alt="new"></img></div>
        <textarea
          name="message"
          cols="30"
          rows="10"
          placeholder="here you can add more details if needed"
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
