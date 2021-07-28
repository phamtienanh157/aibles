import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import EffectDemo from './EffectDemo'
import Ex from './Ex.jsx'

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Ex />
    {/* <EffectDemo /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

