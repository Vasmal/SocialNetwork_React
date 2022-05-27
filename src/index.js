
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store';

const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <App state={state} dispatch={store.dispatch.bind(store)}/>,
     document.getElementById('root')
  );
}

rerenderEntireTree(store.getState());
store.subscribe(() => {
  rerenderEntireTree(store.getState());
});