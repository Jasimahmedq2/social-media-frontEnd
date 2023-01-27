import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { AiOutlineComment, AiOutlineHeart } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai'
import { format } from 'timeago.js';

const PostDetails = ({ post, userData, user, refetch }) => {
  const [liked, setLiked] = useState(post?.like?.length)
  console.log('liked', liked)
  const [isLike, setIsLike] = useState(false)
  const userInfo = userData.length > 0 && userData?.find(user => user?._id === post?.userId)

  useEffect(() => {
    setIsLike(post.like.includes(user._id));
  }, [user._id, post.like]);

  const handleLikeDislike = () => {
    try {
      axios.put(`http://localhost:9000/api/post/${post?._id}/like`, { userId: post._id })
    } catch (error) {
      console.log(error)
    }
    setLiked(isLike ? liked - 1 : liked + 1)
    setIsLike(!isLike)
    refetch()
  }

  return (
    <div className='pb-6'>
      <div className="card w-full bg-white shadow-xl">
        <div className="">
          <div className="flex items-center space-x-2 p-2 relative rounded-lg">
            <label className="btn  btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={userInfo?.img} />
              </div>
            </label>
            <div>
              <h3 className='text-sm font-bold'>{userInfo?.username}</h3>
              <p className='font'>{format(post?.createdAt)}</p>
            </div>

            <div className='absolute right-2 top-4'>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="hover:cursor-pointer m-1"> <BsThreeDotsVertical />
                </label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li><a>Item 1</a></li>
                  <li><a>Item 2</a></li>
                </ul>
              </div>
            </div>
          </div>



          <div className='py-4 px-2'>
            <p>{post?.description}</p>
          </div>
          <div className='p-2 rounded-lg'>
            <img style={{ maxHeight: '25rem', width: '100%' }} src={post?.img} alt="" />
          </div>

          <div className='flex justify-end items-center px-4 py-2 space-x-4'>
            <div className='flex'>
              <p>
                <AiFillHeart
                  onClick={handleLikeDislike}
                  className='sm:text-4xl text-2xl hover:cursor-pointer text-red-300' /></p>
              <span>{liked}</span>
            </div>
            <h4 className='flex '><AiOutlineComment className='sm:text-4xl text-2xl ' /> <span>10</span></h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;