const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
  dialogs: [
    {id: 1, name: 'Sergey'},
    {id: 2, name: 'Sveta'},
    {id: 3, name: 'Valera'},
    {id: 4, name: 'John'},
    {id: 5, name: 'Brad'},
  ],
  dialogText: [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Yo'},
    {id: 3, message: 'How are you?'},
    {id: 4, message: 'I\'m fine'},
  ],
  newMessageText: '',
}

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ( ADD_MESSAGE):
      let newMessage = {
        id: 5,
        message : state.newMessageText
      }
      state.dialogText.push(newMessage);
      state.newMessageText = '';
      return state;
    case  ( UPDATE_NEW_MESSAGE_TEXT):
      state.newMessageText = action.newMessage;
      return state;
    default:
      return state;
  }
}

export const addMessageActionCreate = () => {
  return {type: ADD_MESSAGE};
}

export const updateNewMessageTextActionCreate = (text) => {
  return {type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text};
}

export default messagesReducer;