import React from 'react';

const Profile = () => {
  return (
    <div>
      <div className='relative background-container'>
        <div>
          <button className='background-image text-sm font-bold text-white bg-black btn-outline p-2 absolute top-5 left-4  outline outline-2 '>edit cover photo</button>
        </div>
        <div>
          <img className='w-full h-72 p-2 rounded shadow' src='https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y292ZXIlMjBwaG90b3xlbnwwfHwwfHw%3D&w=1000&q=80' alt="" />
        </div>

        <div className='absolute inset-x-1/2 -bottom-16 z-10'>
          <div className="avatar">
            <div className=" w-52 mask mask-triangle">
              <img src="https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80" />
            </div>
    
          </div>
        </div>

      </div>

    </div>
  );
};

export default Profile;