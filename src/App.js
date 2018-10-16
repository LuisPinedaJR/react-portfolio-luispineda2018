import React, { Component } from 'react';
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { fab, faGithubAlt, faLinkedinIn, faDribbble} from '@fortawesome/free-brands-svg-icons'

import Menu from './Menu';
import Logo from './Logo';
import Info from './Info';
import Content from './Content';
import Resume from './Resume';


library.add(fab, faBars, faTimes, faGithubAlt, faLinkedinIn, faDribbble)

class App extends Component {
  render() {
    return (
      <div>
        {/* <Menu /> */}
        <Logo/>
        <Info/>
        <Content/>
        <Resume />
      </div>
    );
  }
}

export default App;
