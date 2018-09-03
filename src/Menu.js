import React, { Component } from 'react'

import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


export default class Menu extends Component {
 
  render() {
    return (
      // <div className="menu-active" >
      <div>

      <FontAwesomeIcon icon={faBars} className="menu-icon" size="2x"/>  
      <div id="menu">
         <nav>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Portfolio</a>
            <a href="#">Contact</a>
         </nav> 
        </div>
      </div>
    );
  }
}
