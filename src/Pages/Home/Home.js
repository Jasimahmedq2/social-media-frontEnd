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
      <div className='flex justify-between'>
        <LeftBar />
        <div className='w-1/2 space-y-12'>
        <CreatePost />
        <Post />
        </div>
        <RightBar />
      </div>

    </div>
  );
};

export default Home;