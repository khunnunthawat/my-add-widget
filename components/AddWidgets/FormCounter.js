import React from 'react';
import BtnGo from '../BtnGo';

const FormInput = () => {
  return (
    <>
      <h2 className='text-xl mb-2'>Add Counter</h2>
      <form className='flex'>
        <div className='flex-1 mr-1'>
          <input
            type='text'
            className='w-full px-2.5 py-1 focus:outline-none rounded-md'
            placeholder='Enter the initial value'
          />
        </div>
        <div>
          <BtnGo color='primary'> Add</BtnGo>
        </div>
      </form>
    </>
  );
};

export default FormInput;

