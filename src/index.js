import state, { subscribe } from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, addPost, updateNewMessageText, updateNewPostText} from './redux/state';

const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <App state={state}
         addPost={addPost} 
         updateNewPostText={updateNewPostText}
         addMessage={addMessage}
         updateNewMessageText={updateNewMessageText} />, document.getElementById('root')
  );
}

rerenderEntireTree(state);
subscribe(rerenderEntireTree);