import React from 'react';
import WidgetTools from './WidgetTools';

export default function WidgetContent() {
  return (
    <div>
      <h2 className='text-xl'>Widgets</h2>
      <div className='pt-3'>
        <WidgetTools />
      </div>
    </div>
  );
}
