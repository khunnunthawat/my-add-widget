import React from 'react';
import { TextHead } from '../Modals/TextHead';
import WidgetModalList from '../Layouts/WidgetModalList';

function WidgetModal() {
  return (
    <>
      <TextHead>Add widget</TextHead>
      <div className='flex flex-wrap text-center mt-1.5 -ml-1.5'>
        <WidgetModalList />
      </div>
    </>
  );
}

export default WidgetModal;