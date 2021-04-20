import React, { useState } from 'react';
import Btn from '../Btn';

export default function FormCounter({
  setCouter,
  handleCancel,
  listAllWidgets,
  setListAllWidgets,
  DateTime
}) {
  const [checkError, setCheckError] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    // setCounter(e.target.count.value);
    // handleCancel();

    if (e.target.count.value < 0) {
      setCheckError('Please enter at least 0.');
      // console.log(e.target.count.value.length);
    } else {
      setCouter(e.target.count.value);
      handleCancel();

      let id;

      if (listAllWidgets.length == 0) {
        id = 1;
      } else {
        const lastArray = listAllWidgets.slice(-1).pop();
        id = lastArray.id + 1;
      }

      const data = {
        value: Number(e.target.count.value),
        id: id,
        date: DateTime,
        type: 'counter'
      };
      console.log('value = ', data.value);
      setListAllWidgets([...listAllWidgets, data]);
    }
  };

  return (
    <>
      <h2 className='text-xl mb-2'>Add Counter</h2>
      <form onSubmit={onSubmit} className='flex'>
        <div className='flex-1 mr-1'>
          <input
            name='count'
            type='number'
            pattern='[0-9]'
            className='w-full px-2.5 py-1 focus:outline-none rounded-md'
            placeholder='Enter the initial value'
          />
        </div>
        <div>
          <Btn color='primary'> Add</Btn>
        </div>
      </form>
      <div className='text-red-600 text-xs mt-1'>{checkError}</div>
    </>
  );
}
