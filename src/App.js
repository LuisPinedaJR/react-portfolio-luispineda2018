import React, { Component } from 'react';
import './App.css';

import Menu from './Menu'
import Logo from './Logo';
import Info from './Info';
import Content from './Content';

class App extends Component {
  render() {
    return (
      <div>
        <Logo/>
        <Menu/>
        <Info/>
        <Content/>
      </div>
    );
  }
}

export default App;
