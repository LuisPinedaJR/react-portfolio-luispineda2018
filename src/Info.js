import React, { Component } from 'react'
import './App.css';

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
            <div className="icon-section">
              <i></i>
              <i></i>
              <i></i>
            </div>
          </div>
        </div>
    )
  }
}
