import React from 'react';
import { AiOutlineComment, AiOutlineHeart } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';

const ProfilePost = () => {
  return (
    <div className='pb-6 w-1/2'>
    <div className="card w-full bg-white shadow-xl">
      <div className="">
        <div className="flex items-center space-x-2 p-2 relative rounded-lg">
          <label className="btn  btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" />
            </div>
          </label>
          <div>
            <h3 className='text-sm font-bold'>name here</h3>
            <p className='font'>post date here</p>
          </div>

          <div className='absolute right-2 top-4'>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="hover:cursor-pointer m-1">            <BsThreeDotsVertical />
                </label>
              <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
              </ul>
            </div>
          </div>
        </div>



        <div className='py-4 px-2'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla porro quaerat ipsam ullam a doloribus odit rem, reiciendis accusantium, excepturi repudiandae nesciunt similique, quidem quod beatae voluptatibus aut mollitia officiis!</p>
        </div>
        <div className='p-2 rounded-lg'>
          <img style={{ maxHeight: '25rem', width: '100%' }} src="https://i.ibb.co/9Tnhzps/casing.jpg" alt="" />
        </div>

        <div className='flex justify-end items-center px-4 py-2 space-x-4'>
          <h4 className='flex '><AiOutlineHeart className='sm:text-4xl text-2xl' /> <span>40</span></h4>
          <h4 className='flex '><AiOutlineComment className='sm:text-4xl text-2xl' /> <span>10</span></h4>
        </div>
      </div>
    </div>
  </div>
  );
};

export default ProfilePost;