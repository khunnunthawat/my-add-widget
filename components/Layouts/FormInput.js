import React from 'react';

const FormInput = () => {
  return (
    <div>
      <div>
        <h2 className='text-xl mb-2'>Add JustSay</h2>
        <form className='flex'>
          <div className='flex-1 mr-1'>
            <input
              type='text'
              className='w-full px-2.5 py-1 focus:outline-none rounded-md'
              placeholder='Enter text'
              defaultValue
            />
          </div>
          <div>
            <button className='text-white focus:outline-none px-4 py-1 rounded-md bg-blue-500 hover:bg-blue-600'>
              {' '}
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormInput;

<div className='fixed flex items-center justify-center top-0 right-0 bottom-0 left-0 bg-black bg-opacity-70'>
  <div className='relative bg-gray-200 m-5 p-6 pt-4 md:p-8 md:pt-6 rounded-2xl w-96 max-w-full'>
    <button className='absolute text-lg text-gray-600 top-4 right-4 focus:outline-none'>
      <svg
        stroke='currentColor'
        fill='currentColor'
        strokeWidth={0}
        viewBox='0 0 512 512'
        height='1em'
        width='1em'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z' />
      </svg>
    </button>
    <div>
      <div>
        <h2 className='text-xl mb-2'>Add JustSay</h2>
        <form className='flex'>
          <div className='flex-1 mr-1'>
            <input
              type='text'
              className='w-full px-2.5 py-1 focus:outline-none rounded-md'
              placeholder='Enter text'
              defaultValue
            />
          </div>
          <div>
            <button className='text-white focus:outline-none px-4 py-1 rounded-md bg-blue-500 hover:bg-blue-600'>
              {' '}
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

