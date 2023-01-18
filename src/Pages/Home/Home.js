import React from 'react';
import CreatePost from '../../Components/CreatePost';
import LeftBar from '../../Components/LeftBar';
import RightBar from '../../Components/RightBar';
import Navbar from '../../shared/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='flex space-x-6 pt-12'>
        <LeftBar />
        <RightBar />
        <div className='w-1/2'>
        <CreatePost />
        </div>
      </div>

    </div>
  );
};

export default Home;