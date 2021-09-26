import React, { Component } from "react";
import "./Footer.css";

export class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <h2>Let's talk</h2>
          <div>
            <form action="">
              <input
                type="text"
                id="firstName"
                name="first_name"
                placeholder="First Name"
              />
              <input
                type="text"
                id="lastName"
                name="last_name"
                placeholder="Last Name"
              />
              <input
                type="text"
                id="companyName"
                name="company"
                placeholder="Company"
              />
              <textarea
                id="message"
                name="message"
                rows="5"
                cols="50"
                placeholder="Message"
              />
              <button>Submit</button>
            </form>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
