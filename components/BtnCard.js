import React from 'react';

export default function BtnCard({ text, children }) {
  return (
    <>
      <button className='text-white focus:outline-none px-4 py-1 rounded-md bg-blue-500 hover:bg-blue-600'>
        {children}
        {text}
      </button>
    </>
  );
}
