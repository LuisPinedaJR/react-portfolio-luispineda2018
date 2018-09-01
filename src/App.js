import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Luis Pineda Jr.</h1>
        </header>
        <p className="App-intro">
          Luis Pineda, A Software Developer and Design enthusiast.
        </p>
        <div className="info-section">
        </div>
        <div className="info-box">
        <h4>Email</h4>
        <p>Lspnd@Outlook.com</p>
        <h4>Phone</h4>
        <p>813.361.7257</p>
        <h4>Find Me On</h4>
        </div>
        <div className="icon-section">
          <i></i>
          <i></i>
          <i></i>
        </div>
        <div className="content-area">
          <div className="user-img"></div>
          <div className="profile"></div>
          <h1>Luis <br/>
          Pineda
          </h1>
        </div>
      </div>
    );
  }
}

export default App;
