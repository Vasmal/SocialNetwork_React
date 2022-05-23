import React from 'react';
import classes from './../Dialogs.module.css';

const NewMessage = (props) => {
  let newText = React.createRef();
  
  let addMessage = (e) => {
    if (e.key === 'Enter'){
      e.preventDefault();
    }
    if(e.key === 'Enter' && props.newMessageText) {
      // props.addMessage();
      props.dispatch( {type: 'ADD-MESSAGE'} )
    }
  }

  let onMessageChange = () => {
    let text = newText.current.value;
    // props.updateNewMessageText(text);
    props.dispatch( {type: 'UPDATE-NEW-MESSAGE-TEXT', newMessage: text} )
  }

  return (
    <textarea onChange={onMessageChange} onKeyDown={addMessage} value={props.newMessageText} ref={newText} className={classes.newText}></textarea>
  )
}

export default NewMessage;