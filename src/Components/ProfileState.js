import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

const ProfileState = ({currentUser}) => {
  const [likeData, setLikeData] = useState([])
  const loadAllPostLike = async () => {
    const { data } = await axios.get(`http://localhost:9000/api/post/allLikes?userId=${currentUser?._id}`)
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
    <div className='w-1/2 mx-auto'>
      <div className="stats shadow">

        <div className="stat">
          <div className="stat-figure text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
          </div>
          <div className="stat-title">Total Likes</div>
          <div className="stat-value text-primary">{formatNumber(sum)}</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          </div>
          <div className="stat-title">Page Views</div>
          <div className="stat-value text-secondary">2.6M</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <div className="avatar online">
              <div className="w-16 rounded-full">
                <img src="https://placeimg.com/128/128/people" />
              </div>
            </div>
          </div>
          <div className="stat-value">86%</div>
          <div className="stat-title">Tasks done</div>
          <div className="stat-desc text-secondary">31 tasks remaining</div>
        </div>

      </div>
    </div>
  );
};

export default ProfileState;