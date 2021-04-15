import React from 'react';

export default function BtnCard({ title, children }) {
  return (
    <div>
      <button className='text-white focus:outline-none px-4 py-1 rounded-md bg-blue-500 hover:bg-blue-600'>
        {children}
        {title}
      </button>
    </div>
  );
}
