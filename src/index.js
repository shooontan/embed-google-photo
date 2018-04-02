// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const dom = document.getElementById('app');

if (dom) {
  ReactDOM.render(<App />, dom);
}
