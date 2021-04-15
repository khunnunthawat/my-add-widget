import React from 'react';
import BtnCard from './BtnCard';
import { RiAddCircleLine } from 'react-icons/ri';
import { BiBomb } from 'react-icons/bi';

export default function WidgetTools() {
  return (
    <div className='pt-3'>
      <div className='mb-4'>
        <BtnCard text='Add Widget'></BtnCard>
        <BtnCard text='Clear all'></BtnCard>
      </div>
    </div>
  );
}