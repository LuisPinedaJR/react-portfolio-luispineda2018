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
        <span>Pineda</span>
        </h1>
        <h5>Software Developer</h5>
        <p>Hi! my name is Luis Pineda. <br/>
        I am Software Developer and 
        Design enthusiast.</p>

        <a href="http://luispinedajr.com/#features">
            <div className="primary-btn">Portfolio</div>
        </a>
        
        <Link />

        <a href="https://standardresume.co/luispineda">
            <div className="ghost-btn">Resume</div>
        </a>
        </div>
        </div>
      </div>
    )
  }
}
