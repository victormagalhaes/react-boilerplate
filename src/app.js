import React from 'react';
import ReactDOM from 'react-dom';

import Menu from './components/menu/menu';

const App = () => {
  return (
    <div id="main">
      <Menu />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
