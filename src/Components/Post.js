import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';

import { useQuery } from 'react-query';
import { AuthContext } from '../context/AuthContext';
import useFriendsData from '../Hooks/useFriendsData';
import Loader from '../shared/Loader';
import PostDetails from './PostDetails';


const Post = () => {
  const { user } = useContext(AuthContext)
  const [userData] = useFriendsData(user?._id) 
 
  const { isLoading, error, data } = useQuery('timelineData', () => fetch(`http://localhost:9000/api/post/timeline/?userId=${user?._id}`)
    .then(res => res.json())
  )


  if (error) {
    console.log("error", error)
  }
  if (isLoading) {
    return <Loader />
  }
  console.log(data, 'from query')
  return (
    <div>
      <h2>{data.length}</h2>
     {
   data.length > 0 && data.map(post => <PostDetails
      key={post?.userId}
      post={post}
      userData={userData}
      ></PostDetails>)
     }

    </div>
  );
};

export default Post;