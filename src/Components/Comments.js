import axios from 'axios';
import React, { useContext, useEffect, useReducer, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineComment } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { IoMdSend } from 'react-icons/io';
import { AuthContext } from '../context/AuthContext';
import Loader from '../shared/Loader';
import CommentDetails from './CommentDetails';

const Comments = ({ post }) => {
  const { user } = useContext(AuthContext)
  const [comments, setComments] = useState([])
  const [showComment, setShowComment] = useState(false)
  const [selectPost, setSelectPost] = useState({})
  const { register, handleSubmit, reset } = useForm();


console.log("comments", comments)
  const onsubmit = async (data) => {
    const response = await axios.post(`http://localhost:9000/api/comment/`, {
      text: data.text,
      userId: user?._id,
      postId: selectPost?._id
    })
    const commentsInfo = {
      text: data.text,
      author: {
        username: user.username,
        coverPicture: user.coverPicture,
        _id: user._id
      }
    }
    setComments([...comments, commentsInfo])

    reset()
  }


  const handlePostComment = async (post) => {
    const { data } = await axios.get(`http://localhost:9000/api/comment/${post?._id}`)
    setComments(data)
    setSelectPost(post)
    setShowComment(!showComment)
  }


  return (
    <div>
      <div
        className='absolute right-4 top-2 bg-base-300 px-6 rounded hover:cursor-pointer'
        onClick={() => handlePostComment(post)}>
        <h4 className='flex items-center space-x-4 '><AiOutlineComment className='sm:text-4xl text-2xl ' /> <span className='text-xl font-serif '>{ }</span></h4>
      </div>
      <div>
        {
          showComment && comments?.map(comment => <CommentDetails
            key={comment._id}
            comment={comment}
          />)
        }
      </div>
      {
        showComment && <div className='pt-4'>
          <form onSubmit={handleSubmit(onsubmit)}>
            <div className="flex items-center justify-between  bg-base-200 p-2 shadow-sm rounded-lg">
              <span><BsSearch /></span>
              <input type="text"
                {...register("text", { required: true })}
                placeholder="write comment" className="focus:outline-0 bg-base-200 w-11/12" />
              <button type='submit'><IoMdSend className='text-2xl' /></button>
            </div>
          </form>
        </div>
      }

    </div>
  );
};

export default Comments;