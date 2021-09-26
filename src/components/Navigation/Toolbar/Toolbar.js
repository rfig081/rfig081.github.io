import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../../../assets/keyboard-wireless.svg";
import "./Toolbar.css";

export class Toolbar extends Component {
  render() {
    return (
      <header className="sticky">
        <img src={logo} alt="" id="logo" />
        {/* <h3>Reynold</h3> */}
        <nav>
          <ul>
            <li>
              <a
                href="https://github.com/rfig081"
                target="_blank"
                rel="external noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} size="sm" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/reynold-figueroa-36772a129/"
                target="_blank"
                rel="external noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} size="sm" />
              </a>
            </li>
            <li>
              <a
                href="https://codepen.io/rfig081"
                target="_blank"
                rel="external noreferrer"
              >
                <FontAwesomeIcon icon={faCodepen} size="sm" />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Toolbar;
