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
 const id = useLoaderData()
 console.log("id", id)
  return (
    <div className='space-y-12'>
     <CoverPicture user={user}/>
     <ProfileState />
     <div className='flex px-4'>
      <PostPhoto />
      <ProfilePost />
     </div>
    </div>
  );
};

export default Profile;