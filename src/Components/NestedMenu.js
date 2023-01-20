import React from 'react';
import {MdEmojiEvents} from 'react-icons/md'
const NestedMenu = () => {
  return (
    <div>
      <ul className="menu
        p-2 rounded-box ">
        <li className='flex space-x-4'><button className=''><span className='text-xl font-bold'>events</span>  <MdEmojiEvents className='text-4xl text-orange-200'/></button></li>
      </ul>

    </div>
  );
};

export default NestedMenu;