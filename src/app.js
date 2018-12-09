import React from 'react';
import ReactDOM from 'react-dom';

import './styles/base.scss';
import Menu from './components/menu/menu';

import img from './images/ninja.jpg';

const App = () => {
  return (
    <div id="main">
      <Menu />
      <img src={ img } alt=""/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
