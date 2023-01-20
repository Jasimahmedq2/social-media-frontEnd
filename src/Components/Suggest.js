import React from 'react';

const Suggest = () => {
  return (
    <div className="flex items-center space-x-4 py-2 px-4 rounded-lg">
      <label className="btn  btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://placeimg.com/80/80/people" />
        </div>
      </label>
      <h4 className='text-lg font-bold'>name here</h4>
    </div>
  );
};

export default Suggest;