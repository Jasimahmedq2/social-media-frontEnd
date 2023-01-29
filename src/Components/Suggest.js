import axios from 'axios';
import React, { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Suggest = () => {
  const { user } = useContext(AuthContext)
  const [suggested, setSuggested] = useState([])

  const suggestedUser = async () => {
    const { data } = await axios.get(`http://localhost:9000/api/user/currentUser/${user?._id}`)
    setSuggested(data)
  }
  
  const defaultSuggest = suggested.filter(suggest => suggest.city !== "" || suggest.from !== "")

  useEffect(() => {
    suggestedUser()
    setSuggested(defaultSuggest)
  }, [])

  return (
    <div>
      {
        suggested?.map(suggest => {
          return (
            <Link to={`/profile/${suggest?._id}`}>
              <div className="flex items-center space-x-4 py-2 px-4 rounded-lg">
                <label className="btn  btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={suggest?.coverPicture} alt="suggested img" />
                  </div>
                </label>
                <h4 className='text-lg font-bold'>{suggest?.username}</h4>
              </div>
            </Link>
          )
        })
      }
    </div>

  );
};

export default Suggest;