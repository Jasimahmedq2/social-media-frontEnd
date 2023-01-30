import axios from 'axios';
import React, { Children, useEffect, useState } from 'react';
import { createContext } from 'react';
import { useContext } from 'react';

import { AuthContext } from '../context/AuthContext';
import useFriendsData from '../Hooks/useFriendsData';
import useTimeLineData from '../Hooks/useTimeLineData';
import Loader from '../shared/Loader';
import PostDetails from './PostDetails';


const Post = () => {
  const { user } = useContext(AuthContext)
  const [userData] = useFriendsData(user?._id)
  const {data, refetch, isLoading, error} = useTimeLineData(user?._id)

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