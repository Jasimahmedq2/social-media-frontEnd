import React from 'react';

const PostPhoto = () => {
  return (
    <div className='space-y-4 w-1/2'>
      <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        <div className="card-body">
          <p>photos</p>
        </div>
      </div>

      <div className='grid grid-cols-3 gap-2'>
        <div className="avatar">
          <div className="w-24 mask mask-hexagon">
            <img src="https://placeimg.com/192/192/people" />
          </div>
        </div>
        <div className="avatar">
          <div className="w-24 mask mask-hexagon">
            <img src="https://placeimg.com/192/192/people" />
          </div>
        </div>
        <div className="avatar">
          <div className="w-24 mask mask-hexagon">
            <img src="https://placeimg.com/192/192/people" />
          </div>
        </div>
        <div className="avatar">
          <div className="w-24 mask mask-hexagon">
            <img src="https://placeimg.com/192/192/people" />
          </div>
        </div>
        <div className="avatar">
          <div className="w-24 mask mask-hexagon">
            <img src="https://placeimg.com/192/192/people" />
          </div>
        </div>
        <div className="avatar">
          <div className="w-24 mask mask-hexagon">
            <img src="https://placeimg.com/192/192/people" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPhoto;