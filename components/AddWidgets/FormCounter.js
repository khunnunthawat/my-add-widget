import React from 'react';
import Btn from '../Btn';

const FormInput = () => {

  const handleSubmit = function () {
    
  };

  return (
    <>
      <h2 className='text-xl mb-2'>Add Counter</h2>
      <form onSubmit={handleSubmit} className='flex'>
        <div className='flex-1 mr-1'>
          <input
            type='number'
            className='w-full px-2.5 py-1 focus:outline-none rounded-md'
            placeholder='Enter the initial value'
          />
        </div>
        <div>
          <Btn color='primary'> Add</Btn>
        </div>
      </form>
    </>
  );
};

export default FormInput;

