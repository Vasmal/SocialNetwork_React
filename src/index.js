
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/state';

const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <App state={state}
         addPost={store.addPost.bind(store)} 
         updateNewPostText={store.updateNewPostText.bind(store)}
         addMessage={store.addMessage.bind(store)}
         updateNewMessageText={store.updateNewMessageText.bind(store)} />, document.getElementById('root')
  );
}

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);