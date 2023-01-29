import React from 'react';
import { useContext } from 'react';
import {AiFillFolderAdd} from 'react-icons/ai'
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import CoverPicture from './CoverPicture';
import PostPhoto from './PostPhoto';
import ProfilePost from './ProfilePost';
import ProfileState from './ProfileState';

const Profile = () => {
 const {user} = useContext(AuthContext)
 const currentUser = useLoaderData()

 return (
    <div className='space-y-12'>
     <CoverPicture currentUser={currentUser}/>
     <ProfileState />
     <div className='flex px-4'>
      <PostPhoto currentUser={currentUser} />
      <ProfilePost currentUser={currentUser}/>
     </div>
    </div>
  );
};

export default Profile;