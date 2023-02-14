import axios from 'axios';
import React, { useContext } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiFillFolderAdd } from 'react-icons/ai';
import { RiUserFollowFill } from 'react-icons/ri'
import { AuthContext } from '../context/AuthContext';
import CoverForm from './coverForm';
import ProfilePicture from './profilePicture';

const CoverPicture = ({ currentUser }) => {
  const { user, dispatch } = useContext(AuthContext)
  const [isFollowed, setFollowed] = useState(user?.followings?.includes(currentUser._id))



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
    <div className='relative background-container'>
      <div>

        <CoverForm currentUser={currentUser} user={user} />
      </div>




      <div style={{ marginTop: '-8rem' }} className='w-1/2 mx-auto'>
        <ProfilePicture currentUser={currentUser} user={user} />
      </div>



      <div className='w-1/2 mx-auto space-y-4'>

        <div className='flex justify-between items-center'>
          <div class="ml-12 font-medium text-lg">{currentUser?.username}</div>
          {
            currentUser._id !== user._id && (
              <h4 onClick={handleFollowUnfollow} className='flex items-center bg-blue-500 text-white font-bold rounded border border-white p-1 hover:cursor-pointer'>{isFollowed ? "unFollow" : "follow"}<RiUserFollowFill /></h4>
            )
          }

        </div>
      </div>
    </div>
  );
};

export default CoverPicture;