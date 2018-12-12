import React, { Component } from 'react';

import placeholderImage from '../../images/ninja.jpg';

class Home extends Component {

  render() {
    return (
      <div className="home">
        <h1>Home</h1>
        <img className="ninja" src={ placeholderImage } alt="Ninja!"/>
      </div>
    );
  }
}

export default Home;
