import React from 'react';

const FormInput = () => {
  return (
    <>
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
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormInput;
