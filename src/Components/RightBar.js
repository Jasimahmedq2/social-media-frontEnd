import React from 'react';
import Suggest from './Suggest';

const RightBar = () => {
  return (
    <div>
       <div className='h-screen sticky right-2 top-2 overflow-y-auto bg-base-100 shadow-xl rounded-lg py-4'>
    
      <div className="divider"></div> 
      <div>
        <h3 className='text-sm font-bold py-4 px-2'>suggest</h3>
      </div>
   <Suggest />
    </div>
    </div>
  );
};

export default RightBar;