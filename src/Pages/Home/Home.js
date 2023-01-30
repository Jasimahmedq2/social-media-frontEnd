import React from 'react';
import Profile from '../../Components/Profile';
import CreatePost from '../../Components/CreatePost';
import LeftBar from '../../Components/LeftBar';
import Post from '../../Components/Post';
import RightBar from '../../Components/RightBar';
import Navbar from '../../shared/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='flex justify-between space-x-6'>
        <div className='w-1/5'>
          <LeftBar />
        </div>
        <div className='w-1/2 space-y-12'>
          <CreatePost />
          <Post />
        </div>
        <div className='w-1/5'>
          <RightBar />
        </div>
      </div>

    </div>
  );
};

export default Home;