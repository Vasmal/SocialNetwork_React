let rerenderEntireTree;

let state = {
  messages: {
    dialogs: [
      {id: 1, name: 'Sergey'},
      {id: 2, name: 'Sveta'},
      {id: 3, name: 'Valera'},
      {id: 4, name: 'John'},
      {id: 5, name: 'Brad'},
    ],
    dialogText: [
      {message: 'Hi'},
      {message: 'Yo'},
      {message: 'How are you?'},
      {message: 'I\'m fine'},
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
}

export const addPost = () => {
  let newPost = {
    id: 4,
    text: state.profile.newPostText
  }
  state.profile.posts.push(newPost);
  state.profile.newPostText = '';
  rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
  state.profile.newPostText = newText;
  rerenderEntireTree(state);
}

export const addMessage = () => {
  let newMessage = {
    message : state.messages.newMessageText
  }

  state.messages.dialogText.push(newMessage);
  state.messages.newMessageText = '';
  rerenderEntireTree(state);
}

export const updateNewMessageText = (newMessage) => {
  state.messages.newMessageText = newMessage;
  rerenderEntireTree(state);
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
}

export default state;