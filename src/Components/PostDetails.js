import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { AiFillEdit, AiOutlineComment, AiOutlineHeart, AiTwotoneDelete } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai'
import { format } from 'timeago.js';
import { Link } from 'react-router-dom';
import DeletePostModal from '../modal/deletePostModal';
import UpdatePostModal from '../modal/UpdatePostModal';
import Comments from './Comments';

const PostDetails = ({ post, userData, user, refetch }) => {
  const [deletePostModal, setDeletePostModal] = useState(null)
  const [updatePostModal, setUpdatePostModal] = useState(null)
  const [liked, setLiked] = useState(post?.like?.length)
  const [isLike, setIsLike] = useState(false)
  const userInfo = userData?.length > 0 && userData?.find(user => user?._id === post?.userId)

  useEffect(() => {
    setIsLike(post.like.includes(user._id));
  }, [user._id, post.like]);

  const handleLikeDislike = () => {
    try {
      axios.put(`https://own-social.onrender.com/api/post/${post?._id}/like`, { userId: post._id })
    } catch (error) {
      console.log(error)
    }
    setLiked(isLike ? (pre) => pre - 1 : (pre) => pre + 1)
    setIsLike(!isLike)
    refetch()
  }

  return (
    <div>
      <div className='pb-6'>
        <div className="card w-full bg-white shadow-xl">
          <div className="">
            <div className="flex items-center space-x-2 p-2 relative rounded-lg">
              <Link to={`/profile/${userInfo?._id}`}>
                <label className="btn  btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={userInfo?.img} alt="user img" />
                  </div>
                </label>
              </Link>
              <div>
                <h3 className='text-sm font-bold'>{userInfo?.username}</h3>
                <p className='font'>{format(post?.createdAt)}</p>
              </div>
              {
                post?.userId === user?._id && <div className='absolute right-2 top-4'>
                  <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="hover:cursor-pointer m-1"> <BsThreeDotsVertical />
                    </label>
                    <div tabIndex={0} className="dropdown-content menu  shadow bg-base-200 rounded-box lg:w-52  space-y-2">

                      <label
                        onClick={() => setDeletePostModal(post)}
                        htmlFor="delete-post-modal"
                        className='flex items-center p-2 space-x-2 hover:cursor-pointer hover:bg-base-300 rounded'>
                        <AiTwotoneDelete className='sm:text-4xl text-red-300 ' /> <span>delete</span>
                      </label>


                      <label
                        onClick={() => setUpdatePostModal(post)}
                        htmlFor="update-post-modal"
                        className='flex items-c
                      enter  space-x-2 hover:cursor-pointer hover:bg-base-300 rounded'><AiFillEdit className='sm:text-4xl text-blue-400' /> <span>edit</span>
                      </label>
                    </div>
                  </div>
                </div>
              }

            </div>



            <div className='py-4 px-2'>
              <p>{post?.description}</p>
            </div>
            <div className='p-2 rounded-lg'>
              <img style={{ maxHeight: '25rem', width: '100%' }} src={post?.img} alt="" />
            </div>

            <div className='relative px-4 py-2 space-x-4 '>
              <div className='flex'>
                <h2 className='flex space-x-4 bg-base-300 px-6 rounded hover:cursor-pointer'>
                  <AiFillHeart
                    onClick={handleLikeDislike}
                    className='sm:text-4xl text-2xl hover:cursor-pointer text-red-300' />
                  <span className='text-xl font-serif'>{liked}</span>

                </h2>

              </div>
              <Comments post={post} />
            </div>
          </div>
        </div>
      </div>
      {
        deletePostModal && <DeletePostModal
          deletePostModal={deletePostModal}
          setDeletePostModal={setDeletePostModal}
          user={user}
          refetch={refetch}
        />
      }

      {
        updatePostModal && <UpdatePostModal
          updatePostModal={updatePostModal}
          setUpdatePostModal={setUpdatePostModal}
          refetch={refetch}
          user={user}
        />
      }
    </div>
  );
};

export default PostDetails;