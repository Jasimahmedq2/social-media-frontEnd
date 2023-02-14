import React from 'react';
import { BsSearch } from 'react-icons/bs'
import { AiOutlineMessage } from 'react-icons/ai'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleSigOUt = () => {
    localStorage.removeItem("user")
    navigate('/login')
  }

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


            <div className="dropdown dropdown-bottom dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user?.profilePicture} alt="user" />
                </div>
              </label>
              <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-300 rounded-box lg:w-52 z-10 space-y-2">
                <li><Link to='/login'>Log In</Link></li>
                <li><Link to={`/profile/${user?._id}`}>profile</Link></li>
                <li className='hover:cursor-pointer pl-4' onClick={handleSigOUt}>Log out</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;