const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  posts: [
    {id: 1, text: 'Hi, how are you?'},
    {id: 2, text: 'My first post'},
    {id: 3, text: 'My second message'},
  ],
  newPostText: '',
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 4,
        text: state.newPostText
      }
      let stateCopy = {...state};
      stateCopy.posts = [...state.posts];
      stateCopy.posts.push(newPost);
      stateCopy.newPostText = '';
      return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT: {
      let stateCopy = {...state};
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }
    default: 
      return state;
  }
}

export const addPostActionCreate = () => {
  return {type: ADD_POST}
}

export const updateNewPostTextActionCreate = (text) => {
  return {type: UPDATE_NEW_POST_TEXT, newText: text}
}

export default profileReducer;
