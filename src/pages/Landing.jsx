import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Home from './Home';

import './styles/Landing.css';

class Landing extends Component {
  render() {
    return (
      <div>
        <header>
          <Navbar />
        </header>
        <body>
          <Home />
        </body>
      </div>
    )
  }
}

export default Landing;
