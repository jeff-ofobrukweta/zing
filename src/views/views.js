import React, { Component } from 'react';
import Latest from '../Latestcollections/Latestcollections';
import './views.css';
class Navbar extends Component {
  render() {
    return (
      <div className="navbar-container">
          <Latest/>
      </div>
    );
  }
}

export default Navbar;
