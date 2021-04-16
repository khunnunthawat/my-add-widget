import React from 'react';
import Card from '../Cards/Card';

export default function JustSay() {
  const JustSay = 'Hello :)';
  return (
    <Card title='Just Say'>
      <div className='md:break-inside pb-4'>
        <div className='text-center my-8'>
          <h1 className='text-4xl font-bold'>{JustSay}</h1>
        </div>
      </div>
    </Card>
  );
}
