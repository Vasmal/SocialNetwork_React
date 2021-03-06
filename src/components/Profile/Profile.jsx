import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfoContainer from './ProfileInfo/ProfileInfoContainer';

function Profile(props) {
return (
    <div>
      <ProfileInfoContainer store={props.store} />
      <MyPostsContainer store={props.store} />
    </div>
  );
}

export default Profile;