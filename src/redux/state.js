import rerenderEntireTree from "../render";

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
      
    ]
  },

  profile: {
    posts: [
      {id: 1, text: 'Hi, how are you?'},
      {id: 2, text: 'My first post'},
      {id: 3, text: 'My second message'},
    ]
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

export let addPost = (text) => {
  let newPost = {
    id: 4,
    text: text
  }
  state.profile.posts.push(newPost);
  ;
  rerenderEntireTree(state);
}


export default state;