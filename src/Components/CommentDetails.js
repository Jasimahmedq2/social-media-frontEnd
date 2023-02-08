import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const CommentDetails = ({ comment }) => {
  return (
    <div>
      <div className='py-4 flex items-center space-x-2'>
        <Link to={`/profile/${comment.author._id}`}>
          <label className="btn  btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={comment.author.profilePicture} alt="user" />
            </div>
          </label>
        </Link>


        <div className='space-y-2 rounded shadow-lg bg-base-200 px-4 py-2'>
          <Link to={`/profile/${comment.author._id}`}>
            <h3 className='text-xl font-bold hover:cursor-pointer hover:underline'>{comment.author.username}</h3>
          </Link>

          <p className='text-sm'>{comment.text}</p>
        </div>
      </div>

    </div>
  );
};

export default CommentDetails;