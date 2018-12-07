import React, { Component } from 'react';
import './menu.scss';

class Menu extends Component {

  render() {
    return (
      <div className="menu">
        <ul>
          <li className="menu-item">Home</li>
          <li className="menu-item">Services</li>
          <li className="menu-item">About Us</li>
          <li className="menu-item">Contact</li>
        </ul>
      </div>
    );
  }

}

export default Menu;
