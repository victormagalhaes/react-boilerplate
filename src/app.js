import React from 'react';
import ReactDOM from 'react-dom';

import './styles/base.scss';
import Menu from './components/menu/menu';

const App = () => {
  return (
    <div className="main">
      <Menu />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
