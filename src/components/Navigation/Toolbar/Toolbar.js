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
      <header id="toolbar" className="toolbar">
        <img src={logo} alt="" id="logo" title="Home" />
        {/* <h3>Reynold</h3> */}
        <nav>
          <ul>
            <li title="Github">
              <a
                href="https://github.com/rfig081"
                target="_blank"
                rel="external noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li title="Linkedin">
              <a
                href="https://www.linkedin.com/in/reynold-figueroa-36772a129/"
                target="_blank"
                rel="external noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li title="Codepen">
              <a
                href="https://codepen.io/rfig081"
                target="_blank"
                rel="external noreferrer"
              >
                <FontAwesomeIcon icon={faCodepen} />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Toolbar;
