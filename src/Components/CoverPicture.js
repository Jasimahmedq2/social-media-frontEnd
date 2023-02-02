import axios from 'axios';
import React, { useContext } from 'react';
import { useState } from 'react';
import { AiFillFolderAdd } from 'react-icons/ai';
import { RiUserFollowFill } from 'react-icons/ri'
import { AuthContext } from '../context/AuthContext';

const CoverPicture = ({ currentUser }) => {
  const { user, dispatch } = useContext(AuthContext)
  console.log("currentUser", currentUser)
  const [isFollowed, setFollowed] = useState(user?.followings?.includes(currentUser._id))
  console.log("isFollowed", isFollowed)
  const handleFollowUnfollow = async () => {
    try {
      if (isFollowed) {
        await axios.put(`http://localhost:9000/api/user/${currentUser?._id}/unfollowed`, { userId: user._id });
        dispatch({ type: "UNFOLLOW", payload: currentUser._id })


      } else {
        await axios.put(`http://localhost:9000/api/user/${currentUser?._id}/following`, { userId: user?._id });

        dispatch({ type: "FOLLOW", payload: currentUser._id })
      }

      setFollowed(!isFollowed)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <div className='relative background-container'>
        <div>
          <input
            className='background-image text-sm font-bold text-white bg-black  absolute top-5 left-4 '
            type="file" id="" />
        </div>


        <div>
          <img className='w-full h-72 p-2 rounded shadow' src={currentUser?.coverPicture || 'https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y292ZXIlMjBwaG90b3xlbnwwfHwwfHw%3D&w=1000&q=80'} alt="" />
        </div>

        <div style={{ marginTop: '-8rem' }} className='w-1/2 mx-auto'>
          <div className="avatar">
            <div className=" w-1/2 mx-auto rounded relative">
              <img src={currentUser?.profilePicture || "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80"} />

              <label className=" rounded-md cursor-pointer text-white absolute right-0 top-0  z-20">
                <input type="file" className="hidden" />
                <span><AiFillFolderAdd className='text-4xl text-secondary' /></span>
              </label>


            </div>
          </div>



          <div className='w-1/2 mx-auto space-y-4'>

            <div className='flex justify-between items-center'>
              <h3 className='text-xl font-bold'>{currentUser?.username}</h3>
              {
                currentUser._id !== user._id && (
                  <h4 onClick={handleFollowUnfollow} className='flex items-center bg-blue-500 text-white font-bold rounded border border-white p-1 hover:cursor-pointer'>{isFollowed ? "unFollow" : "follow"}<RiUserFollowFill /></h4>
                )
              }

            </div>
            <p className='text-sm'>write title something your self</p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default CoverPicture;