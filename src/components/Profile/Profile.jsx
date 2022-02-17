import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile(props) {
return (
    <div>
      <ProfileInfo addPost={props.addPost}/>
      <MyPosts posts={props.profile.posts}/>
    </div>
  );
}

export default Profile;