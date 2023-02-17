import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

const ProfileState = ({currentUser}) => {
  const [likeData, setLikeData] = useState([])
  const loadAllPostLike = async () => {
    const { data } = await axios.get(`https://own-social.onrender.com/api/post/allLikes?userId=${currentUser?._id}`)
    setLikeData(data)
  }

  const sum = likeData.reduce((accumulator, currentValue) => accumulator + currentValue.likeCount, 0);

 console.log("full data and like together", likeData, sum)
  useEffect(() => {
    loadAllPostLike()
  }, [])

  function formatNumber(value) {
    if (value >= 1000 && value < 1000000) {
      return `${(value / 1000).toFixed(1)}k`;
    } else if (value >= 1000000) {
      return `${(value / 1000000).toFixed(1)}m`;
    }
  
    return value.toString();
  }

  return (
  
      <div className="stats shadow mx-6">

        <div className="stat">
          <div className="stat-figure text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
          </div>
          <div className="stat-title">Total Likes</div>
          <div className="stat-value text-primary">{formatNumber(sum)}</div>
        </div>

      </div>
 
  );
};

export default ProfileState;