import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost} from './redux/state';

const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <App state={state} addPost={addPost}/>, document.getElementById('root')
  );
}

reportWebVitals();

export default rerenderEntireTree;
