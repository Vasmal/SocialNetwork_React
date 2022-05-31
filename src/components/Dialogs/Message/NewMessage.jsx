import React from 'react';
import classes from './../Dialogs.module.css';



const NewMessage = (props) => {
  
  let addMessage = (e) => {
  
    if (e.key === 'Enter') {
      e.preventDefault();
    }
    if(e.key === 'Enter' && props.newMessageText) {
      props.onAddMassage();
    }
  }

  let onMessageChange = (e) => {
    let text = e.target.value;
    props.updateNewMessageText(text);
  }

  return (
    <textarea onChange={onMessageChange} onKeyDown={addMessage} value={props.newMessageText} className={classes.newText}></textarea>
  )
}

export default NewMessage;