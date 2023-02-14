import axios from 'axios';
import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { AiFillEdit, AiFillHeart, AiOutlineComment, AiOutlineHeart, AiTwotoneDelete } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { format } from 'timeago.js';
import { AuthContext } from '../context/AuthContext';
import useTimeLineData from '../Hooks/useTimeLineData';
import useUserPost from '../Hooks/useUserPost';
import DeletePostModal from '../modal/deletePostModal';
import UpdatePostModal from '../modal/UpdatePostModal';
import Comments from './Comments';

const ProfilePost = ({ currentUser }) => {
  const { user } = useContext(AuthContext)
  const { refetch } = useTimeLineData(user._id)
  const [deletePostModal, setDeletePostModal] = useState(null)
  const [updatePostModal, setUpdatePostModal] = useState(null)

  const [userPost] = useUserPost(currentUser?._id)


  return (
    <div className='grid grid-cols-1 w-1/2'>
      {
        userPost?.map(userPost => {
          const { description, img, createdAt, } = userPost;
          return (
            <div key={userPost._id}>
              <div className='pb-6 w-full'>
                <div className="card w-full bg-white shadow-xl">
                  <div className="">
                    <div className="flex items-center space-x-2 p-2 relative rounded-lg">
                      <label className="btn  btn-circle avatar">
                        <div className="w-10 rounded-full">
                          <img src={currentUser?.profilePicture || 'https://i.pinimg.com/originals/ff/a0/9a/ffa09aec412db3f54deadf1b3781de2a.png'} />
                        </div>
                      </label>
                      <div>
                        <h3 className='text-sm font-bold'>{currentUser?.username}</h3>
                        <p className='font'>{format(createdAt)}</p>
                      </div>

                      <div className='absolute right-2 top-4'>
                        <div className="dropdown dropdown-end">
                          <label tabIndex={0} className="hover:cursor-pointer m-1">            <BsThreeDotsVertical />
                          </label>
                          <div tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            <label
                              onClick={() => setDeletePostModal(userPost)}
                              htmlFor="delete-post-modal"
                              className='flex items-center p-2 space-x-2 hover:cursor-pointer hover:bg-base-300 rounded'>
                              <AiTwotoneDelete className='sm:text-4xl text-red-300 ' /> <span>delete</span>
                            </label>


                            <label
                              onClick={() => setUpdatePostModal(userPost)}
                              htmlFor="update-post-modal"
                              className='flex items-center p-2 space-x-2 hover:cursor-pointer hover:bg-base-300 rounded'>
                              <AiFillEdit className='sm:text-4xl text-blue-300 ' /> <span>edit</span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>



                  <div className='py-4 px-2'>
                    <p>{description}</p>
                  </div>
                  <div className='p-2 rounded-lg'>
                    <img style={{ maxHeight: '25rem', width: '100%' }} src={img} alt="" />
                  </div>

                  <div className='relative px-4 py-2 space-x-4 '>
                    <div className='flex'>
                      <h2 className='flex space-x-4 bg-base-300 px-6 rounded hover:cursor-pointer'>
                        <AiFillHeart

                          className='sm:text-4xl text-2xl hover:cursor-pointer text-red-300' />
                        <span className='text-xl font-serif'>0</span>

                      </h2>

                    </div>
                    <Comments post={userPost} />
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
      {
        deletePostModal && <DeletePostModal
          deletePostModal={deletePostModal}
          setDeletePostModal={setDeletePostModal}
          user={user}
         
        />
      }
      {
        updatePostModal && <UpdatePostModal
          updatePostModal={updatePostModal}
          setUpdatePostModal={setUpdatePostModal}
          user={user}
          refetch={refetch}
        />
      }
    </div >
  );
};

export default ProfilePost;