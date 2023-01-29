import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import useFriendsData from '../Hooks/useFriendsData';

const Friends = () => {
  const { user } = useContext(AuthContext)
  const [userData] = useFriendsData(user?._id)
  return (
    <>
      {
        userData?.length > 0 && userData.map(userInfo => {
          return (
            <Link to={`profile/${userInfo?._id}`}>
              <div className="flex items-center space-x-4 py-2 px-4 rounded-lg">
                <label className="btn  btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={userInfo?.img} />
                  </div>
                </label>
                <h4 className='text-lg font-bold'>{userInfo?.username}</h4>
              </div>
            </Link>
          )
        })
      }
    </>
  );
};

export default Friends;