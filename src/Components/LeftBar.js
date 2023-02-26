import React from 'react';
import Friends from './Friends';
import NestedMenu from './NestedMenu';

const LeftBar = () => {
  return (
    <div className='h-screen sm:sticky sm:left-2 sm:top-2 overflow-y-auto bg-base-100 shadow-xl rounded-lg sm:py-6'>
      <NestedMenu />
      <div className="divider"></div>
      <div>
        <h3 className='text-sm font-bold py-4 px-2'>Friends</h3>
      </div>
      <Friends />
    </div>
  );
};

export default LeftBar;