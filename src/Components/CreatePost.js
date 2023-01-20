import React from 'react';
import {AiFillTag} from 'react-icons/ai'
import {CiLocationOn} from 'react-icons/ci'
import {HiOutlinePhotograph} from 'react-icons/hi'


const CreatePost = () => {
  return (
    <div className="pt-12">
      <div className="card w-full bg-white shadow-xl">
        <div className="">
          <div className="flex items-center space-x-2 p-2 rounded-lg">
            <label className="btn  btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
              </div>
            </label>
            <textarea type="text" placeholder="what's on your mind, jasim"  className="focus:outline-0 w-full p-6 resize-none" />
          </div>
        </div>
        <div className="divider"></div> 
        <div className='flex justify-center items-center space-x-6 p-2'>
        <span className='text-4xl'><HiOutlinePhotograph /></span>
        <span className='text-4xl'><CiLocationOn /></span>
        <span className='text-4xl'><AiFillTag /></span>
     </div>
      </div>
    </div>
  );
};

export default CreatePost;