import React from 'react';
import BtnCard from '../BtnCard';
import { RiAddCircleLine } from 'react-icons/ri';
import { BiBomb } from 'react-icons/bi';

export default function WidgetTools() {

  let iconTool = 'inline-block text-xl relative -top-0.5';
  
  return (
    <div className='pt-3'>
      <div className='mb-4'>
        <BtnCard text='Add Widget'>
          <RiAddCircleLine className={`${iconTool}`} />{' '}
        </BtnCard>{' '}
        <BtnCard text='Clear all'>
          <BiBomb className={`${iconTool}`} />{' '}
        </BtnCard>
      </div>
    </div>
  );
}