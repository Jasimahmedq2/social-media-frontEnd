import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import useUserPost from '../Hooks/useUserPost';

const ProfileFriend = ({ currentUser }) => {
  const { user } = useContext(AuthContext)
  const [mutuals, setMutuals] = useState([])
  console.log("mutuals", mutuals)

  const LoadMutualFriends = async () => {
    const { data } = await axios.get(`http://localhost:9000/api/user/mutualfriends/${user._id}/${currentUser._id}`)
    setMutuals(data)
  }

  useEffect(() => {
    LoadMutualFriends()
  }, [])


  const [userPost] = useUserPost(currentUser?._id)
  const PostPhoto = userPost.filter(uPhoto => uPhoto.img !== "")
  console.log("userPost", userPost)
  return (
    <div className='space-y-4'>
      <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        <div className="card-body">
        <p className='text-xl font-bold'>Mutual  {mutuals.length > 1 ? "Friends" : "friend"} <span className='text-primary text-xl'>-----</span> {mutuals?.length}</p>        </div>
      </div>

      <div className='grid grid-cols-3 gap-2'>
        {
          mutuals?.slice(0, 9).map(mutual => {
            return (
              <div>
                <div className="avatar">
                  <div className="w-32 rounded">
                    <img src={mutual?.img} alt="post img" />
                  </div>
                </div>
                <div>
                  <h2 className='text-xl font-bold'>{mutual.username}</h2>
                </div>
              </div>
            )
          })
        }
      </div>

    </div>
  );
};

export default ProfileFriend;