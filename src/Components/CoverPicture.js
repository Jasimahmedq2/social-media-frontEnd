import React from 'react';
import { AiFillFolderAdd } from 'react-icons/ai';

const CoverPicture = ({user}) => {
  return (
    <div>
       <div className='relative background-container'>
        <div>
          <input 
          className='background-image text-sm font-bold text-white bg-black  absolute top-5 left-4 '
          type="file"  id="" />
        </div>
        <div>
          <img className='w-full h-72 p-2 rounded shadow' src={user?.coverPicture || 'https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y292ZXIlMjBwaG90b3xlbnwwfHwwfHw%3D&w=1000&q=80'} alt="" />
        </div>

        <div style={{marginTop: '-8rem'}} className='w-1/2 mx-auto'>
          <div className="avatar">
            <div className=" w-1/2 mx-auto rounded relative">
              <img src={user?.profilePicture || "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80"} />
              <button className='text-white absolute right-0 top-0  z-20'><AiFillFolderAdd className='text-4xl text-secondary'/></button>
            </div>
          </div>
          <div className='w-1/2 mx-auto space-y-4'>
            <h3 className='text-xl font-bold'>{user?.username}</h3>
            <p className='text-sm'>write title something your self</p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default CoverPicture;