import React from 'react';
import { BsSearch } from 'react-icons/bs'
import { AiOutlineMessage } from 'react-icons/ai'
import { IoMdNotificationsOutline } from 'react-icons/io'

const Navbar = () => {
  return (
    <div className='drop-shadow-lg sticky top-0 z-10'>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <p className="btn btn-ghost normal-case text-xl">own-social</p>
          <div className="flex items-center space-x-2 bg-base-200 p-2 shadow-sm rounded-lg">
            <span><BsSearch /></span>
            <input type="text" placeholder="Search" className="focus:outline-0 bg-base-200" />
          </div>

        </div>

        <div className="space-x-10">


          <div className='space-x-6 mt-4'>
            <div className="indicator">
              <span className="indicator-item badge badge-secondary">99</span>
              <span className='text-3xl'><AiOutlineMessage /></span>
            </div>
            <div className="indicator">
              <span className="indicator-item badge badge-primary">21</span>
              <span className='text-3xl'><IoMdNotificationsOutline /></span>
            </div>
          </div>

          <div className="dropdown dropdown-end">
            <label className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
              </div>
            </label>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;