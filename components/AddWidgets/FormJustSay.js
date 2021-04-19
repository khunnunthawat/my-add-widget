import React, { useState } from 'react';
import BtnGo from '../BtnGo';

const FormInput = ({
  setTitleJustsay,
  handleCancel,
  listAllWidgets,
  setListAllWidgets,
  DateTime
}) => {

  const [inputText, setInputText] = useState('');
  const [checkError, setCheckError] = useState('');

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (e.target.title.value.length < 3) {
      setCheckError('Please enter at least 3 characters.');
    } else {
      setTitleJustsay(e.target.title.value);
      handleCancel();

      let id;

      if (listAllWidgets.length == 0) {
        id = 1;
      } else {
        const lastArray = listAllWidgets.slice(-1).pop();
        id = lastArray.id + 1;
      }
      const data = {
        value: e.target.title,
        id: id,
        date: DateTime,
      };
      setListAllWidgets([...listAllWidgets, data]);
    }
  }

  return (
    <>
      <h2 className='text-xl mb-2'>Add JustSay</h2>
      <form className='flex' onSubmit={onSubmit}>
        <div className='flex-1 mr-1'>
          <input
            type='text'
            className='w-full px-2.5 py-1 focus:outline-none rounded-md'
            placeholder='Enter text'
          />
        </div>
        <div>
          <BtnGo color='primary'> Add</BtnGo>
        </div>
        <p className='text-red-600 text-xs mt-1'>{checkError}</p>
      </form>
    </>
  );
};

export default FormInput;

