import React from 'react';
import {AiFillFolderAdd} from 'react-icons/ai'
import CoverPicture from './CoverPicture';
import PostPhoto from './PostPhoto';
import ProfilePost from './ProfilePost';
import ProfileState from './ProfileState';

const Profile = () => {
  return (
    <div className='space-y-12'>
     <CoverPicture />
     <ProfileState />
     <div className='flex px-4'>
      <PostPhoto />
      <ProfilePost />
     </div>
    </div>
  );
};

export default Profile;