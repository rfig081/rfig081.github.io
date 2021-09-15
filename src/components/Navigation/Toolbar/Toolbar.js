import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faCodepen } from '@fortawesome/free-brands-svg-icons';
import logo from '../../../assets/keyboard.svg'
import "./Toolbar.css";

export class Toolbar extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <img src={logo} alt="Reynold Figueroa"  class="logo"/>
          <nav>
            <ul>
              <li><a href="https://github.com/rfig081"><FontAwesomeIcon icon={faGithub}/></a></li>
              <li><a href="https://www.linkedin.com/in/reynold-figueroa-36772a129/"><FontAwesomeIcon icon={faLinkedin}/></a></li>              
              <li><a href="https://codepen.io/rfig081"><FontAwesomeIcon icon={faCodepen}/></a></li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}

export default Toolbar
