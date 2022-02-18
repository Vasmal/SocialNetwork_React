import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile(props) {
return (
    <div>
      <ProfileInfo addPost={props.addPost} newPostText={props.profile.newPostText} updateNewPostText={props.updateNewPostText}/>
      <MyPosts posts={props.profile.posts}/>
    </div>
  );
}

export default Profile;