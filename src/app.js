import React from 'react';
import ReactDOM from 'react-dom';

import './styles/base.scss';
import Menu from './components/menu/menu';

const App = () => {
  return (
    <div id="main">
      <Menu />
      <img src="images/ninja.jpg" alt=""/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
