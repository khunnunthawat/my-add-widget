import React from 'react';
import Card from '../Layouts/Card';

export default function JustSay() {
  
  const JustSay = 'Hello :)';

  return (
    <Card title='Just Say'>
      <div className='text-center mt-8 mb-12'>
        <h1 className='text-4xl font-bold'>{JustSay}</h1>
      </div>
    </Card>
  );
}
