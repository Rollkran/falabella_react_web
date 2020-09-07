import React, { Component } from 'react';

import './styles/Navbar.css';
import logo from '../images/logo-banco-falabella.png';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <div className="Navbar__brand">
          <div className="Navbar__brand-logo">
            <Link className="" to="/">
              <img className="" src={logo} alt=""/>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar
