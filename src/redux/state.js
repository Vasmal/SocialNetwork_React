import friendsReducer from "./friends-reducer";
import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";

let store = {
  _state: {
    messages: {
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
    },
  
    profile: {
      posts: [
        {id: 1, text: 'Hi, how are you?'},
        {id: 2, text: 'My first post'},
        {id: 3, text: 'My second message'},
      ],
    
      newPostText: '',
    },
  
    friends: {
      online: [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Barbara'},
        {id: 3, name: 'Alla'},
        {id: 4, name: 'Max'}
      ]
    }
  },
  _callSubscriber() {
    console.log('method for obserever');
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profile = profileReducer(this._state.profile, action);
    this._state.messages = messagesReducer(this._state.messages, action);
    this._state.friends = friendsReducer(this._state.friends, action)
    this._callSubscriber(this._state);
  }
}

export default store;