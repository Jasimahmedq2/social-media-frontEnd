import React from 'react';
import { useContext } from 'react';
import { AiFillFolderAdd } from 'react-icons/ai'
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import CoverPicture from './CoverPicture';
import PostPhoto from './PostPhoto';
import ProfileFriend from './ProfileFriend';
import ProfilePost from './ProfilePost';
import ProfileState from './ProfileState';

const Profile = () => {
  const currentUser = useLoaderData()

  return (
    <div className='space-y-12'>
      <CoverPicture currentUser={currentUser} />
      <ProfileState currentUser={currentUser} />
      <div className='flex px-4 '>
        <div className='w-1/2 space-y-12'>
          <PostPhoto currentUser={currentUser} />
          <ProfileFriend currentUser={currentUser} />
        </div>
        <ProfilePost currentUser={currentUser} />
      </div>
    </div>
  );
};

export default Profile;