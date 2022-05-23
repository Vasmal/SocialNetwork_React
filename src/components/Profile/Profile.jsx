import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile(props) {
return (
    <div>
      <ProfileInfo dispatch={props.dispatch} newPostText={props.profile.newPostText} />
      <MyPosts posts={props.profile.posts} />
    </div>
  );
}

export default Profile;