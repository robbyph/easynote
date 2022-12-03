import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <div>
      <span className='pl-8 text-4xl font-semibold text-black '>
        EasyNote <span className='text-4xl'>✏️</span>
      </span>
      <button className='absolute top-0 right-0 px-4 py-2 bg-slate-400'>
        Login
      </button>
    </div>
  );
};

export default Header;
