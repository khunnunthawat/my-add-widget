import React from 'react';
import BtnCard from './BtnCard';
import { RiAddCircleLine } from 'react-icons/ri';
import { BiBomb } from 'react-icons/bi';

export default function WidgetTools() {
  return (
    <div>
      <BtnCard title='Add Widget'>
        <RiAddCircleLine />
      </BtnCard>
      <BtnCard title='Clear all'>
        <BiBomb />
      </BtnCard>
    </div>
  );
}

{/* <div class='pt-3'>
  <div className='mb-4'>
    <BtnCard title='Add Widget'>
      <RiAddCircleLine />
    </BtnCard>{' '}
    <BtnCard title='Clear all'>
      <BiBomb />{' '}
    </BtnCard>
  </div>
</div> */}
