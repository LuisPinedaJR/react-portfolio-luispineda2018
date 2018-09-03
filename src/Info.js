import React, { Component } from 'react'
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faLinkedin, faLinkedinIn, faDribbble } from '@fortawesome/free-brands-svg-icons';

export default class Info extends Component {
  render() {
    return (
        <div className="info-section">
          <div className="info-box">
          <h4>Email</h4>
          <p>Lspnd@Outlook.com</p>
          <h4>Phone</h4>
          <p>813.361.7257</p>
          <h4>Find Me On</h4>
            <div>
             <a href="https://dribbble.com/luisjr"><FontAwesomeIcon className="icon-section" icon={faDribbble} size="2x"/></a>
             <a href="https://github.com/LuisPinedaJR"><FontAwesomeIcon className="icon-section" icon={faGithubAlt} size="2x"/></a>
             <a href="https://www.linkedin.com/in/luispinedajr1/"><FontAwesomeIcon className="icon-section" icon={faLinkedinIn} size="2x"/></a>
            </div>
          </div>
        </div>
    )
  }
}
