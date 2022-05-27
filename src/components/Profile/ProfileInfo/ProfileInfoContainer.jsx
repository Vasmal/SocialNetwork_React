import React from 'react';
import { addPostActionCreate, updateNewPostTextActionCreate } from '../../../redux/profile-reducer';
import ProfileInfo from './ProfileInfo';

const ProfileInfoContainer = (props) => {
let newPostText = props.store.getState().profile.newPostText;
  let addPost = () => {
    
    let text = props.store.getState().profile.newPostText;
    if(text) {
      props.store.dispatch( addPostActionCreate() )
    }
  }
 
  let onPostChange = (text) => {
    props.store.dispatch( updateNewPostTextActionCreate(text) );
  }

  return < ProfileInfo addPost={addPost} updateNewPostText={onPostChange} newPostText={newPostText} />
}

export default ProfileInfoContainer;