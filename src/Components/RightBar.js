import React from 'react';
import Suggest from './Friends';

const RightBar = () => {
  return (
    <div>
       <div className='h-screen sticky right-0 top-2 overflow-y-auto bg-base-100 shadow-xl rounded-lg py-4'>
    
      <div className="divider"></div> 
      <div>
        <h3 className='text-sm font-bold py-4 px-2'>suggest</h3>
      </div>
   <Suggest />
   <Suggest /> 
   <Suggest />
   <Suggest />
   <Suggest />
   <Suggest />
   <Suggest />
   <Suggest />
   <Suggest />
   <Suggest />
   <Suggest />
    </div>
    </div>
  );
};

export default RightBar;