import React, { Component } from 'react';

import './App.css';

export default class Content extends Component {
  render() {
    return (
        <div className="content-area">
        <div className="img-container">
          <div className="user-img">
          </div>
        </div>
        
        <div className="profile-section">
          <div className="profile">
        
        <h1>Luis<br/>
        Pineda
        </h1>
        <h5>Software Developer</h5>
        <p>Hi! my name is Luis Pineda and 
        I am Software Developer and 
        Design enthusiast.</p>
        <button className="primary-btn">Portfolio</button>
        <button className="ghost-btn">Resume</button>
        </div>
        </div>
      </div>
    )
  }
}
