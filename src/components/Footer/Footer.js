import React, { Component } from "react";
import ReCAPTCHA from "../ReCAPTCHA";
import "./Footer.css";

export class Footer extends Component {
  sendContactEmail = (_) => {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const companyName = document.getElementById("companyName").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    console.log(firstName, lastName, companyName, email, message);
  };

  render() {
    return (
      <footer>
        <div className="container">
          <h2>Let's talk</h2>
          <div>
            <form name="contactForm">
              <input
                type="text"
                id="firstName"
                name="first_name"
                placeholder="First Name"
                // required
              />
              <input
                type="text"
                id="lastName"
                name="last_name"
                placeholder="Last Name"
                // required
              />
              <input
                type="text"
                id="companyName"
                name="company"
                placeholder="Company"
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                // required
              />
              <textarea
                id="message"
                name="message"
                rows="5"
                cols="50"
                placeholder="Message"
                // required
              />
              <ReCAPTCHA
                handleSubmit={this.sendContactEmail}
                buttonText="SUBMIT"
              />
              {/* <input type="submit" value="Submit" /> */}
            </form>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
