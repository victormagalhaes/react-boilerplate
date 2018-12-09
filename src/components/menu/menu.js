import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Home from '../../pages/home/home';
import Services from '../../pages/services/services';
import About from '../../pages/about/about';

import './menu.scss';

class Menu extends Component {
  render() {
    return (
      <Router>
        <div className="menu">
          <ul>
            <li className="menu-item"><Link to="/">Home</Link></li>
            <li className="menu-item"><Link to="/services">Services</Link></li>
            <li className="menu-item"><Link to="/about">About us</Link></li>
          </ul>

          <Route exact path="/" component={ Home } />
          <Route path="/services" component={ Services } />
          <Route path="/about" component={ About } />
        </div>
      </Router>
    );
  }

}

export default Menu;
