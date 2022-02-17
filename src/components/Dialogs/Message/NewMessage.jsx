import React from 'react';
import classes from './../Dialogs.module.css';

const NewMessage = (props) => {
  let newText = React.createRef();
  
  let addMessage = (e) => {
    let text = newText.current;
    if (e.key === 'Enter'){
      e.preventDefault();
    }
    if(e.key === 'Enter' && text.value) {
      alert(text.value);
      text.value = '';
    }
  }

  return (
    <textarea onKeyDown={addMessage} ref={newText} className={classes.newText}></textarea>
  )
}

export default NewMessage;