import React from 'react';
import Friends from './Friends';
import NestedMenu from './NestedMenu';

const LeftBar = () => {
  return (
    <div className='w-1/5 h-screen sticky left-2 top-2 overflow-y-auto bg-base-100 shadow-xl rounded-lg py-4'>
      <NestedMenu />
      <NestedMenu />
      <NestedMenu />
      <NestedMenu />
      <NestedMenu />
      <NestedMenu />
      <NestedMenu />
      <NestedMenu />
      <NestedMenu />
      <NestedMenu />
      <NestedMenu />
      <div className="divider"></div> 
      <div>
        <h3 className='text-sm font-bold py-4 px-2'>Friends</h3>
      </div>
   <Friends />
   <Friends /> 
   <Friends />
   <Friends />
   <Friends />
   <Friends />
   <Friends />
   <Friends />
   <Friends />
   <Friends />
   <Friends />
    </div>
  );
};

export default LeftBar;