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
 
  const { isLoading, error, data, refetch } = useQuery('timelineData', () => fetch(`http://localhost:9000/api/post/timeline/?userId=${user?._id}`)
    .then(res => res.json())
  )


  if (error) {
    console.log("error", error)
  }
  if (isLoading) {
    return <Loader />
  }
  return (
    <div>
     {
   data?.length > 0 && data.map(post => <PostDetails
      key={post?._id}
      post={post}
      userData={userData}
      user={user}
      refetch={refetch}
      ></PostDetails>)
     }

    </div>
  );
};

export default Post;