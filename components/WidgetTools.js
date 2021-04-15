import React from 'react';
import BtnCard from './BtnCard';

export default function WidgetTools() {
  return (
    <div className='mb-4'>
      <BtnCard title='Add Widget'>
        <svg
          stroke='currentColor'
          fill='currentColor'
          strokeWidth={0}
          viewBox='0 0 24 24'
          className='inline-block text-xl relative -top-0.5'
          height='1em'
          width='1em'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g>
            <path fill='none' d='M0 0h24v24H0z' />
            <path d='M11 11V7h2v4h4v2h-4v4h-2v-4H7v-2h4zm1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z' />
          </g>
        </svg>
      </BtnCard>
      <BtnCard title='Clear all'>
        <svg
          stroke='currentColor'
          fill='currentColor'
          strokeWidth={0}
          viewBox='0 0 24 24'
          className='inline-block text-xl relative -top-0.5'
          height='1em'
          width='1em'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M21,3.001c-1.4,0-2.584,1.167-2.707,1.293L17.207,5.38l-1.091-1.088c-0.391-0.39-1.022-0.39-1.413,0.001L13.46,5.537 C12.512,5.18,11.52,5,10.5,5C5.813,5,2,8.813,2,13.5S5.813,22,10.5,22s8.5-3.813,8.5-8.5c0-0.909-0.144-1.8-0.428-2.658 l1.345-1.345C20.104,9.31,20.21,9.055,20.21,8.79c0-0.266-0.105-0.52-0.294-0.708l-1.293-1.29l1.088-1.088 C19.94,5.475,20.556,5.001,21,5.001h1v-2H21z M16.489,10.979C16.828,11.783,17,12.631,17,13.5c0,3.584-2.916,6.5-6.5,6.5 S4,17.084,4,13.5S6.916,7,10.5,7c0.96,0,1.89,0.21,2.762,0.624c0.381,0.181,0.837,0.103,1.136-0.196l1.014-1.014l2.384,2.377 l-1.092,1.092C16.415,10.17,16.331,10.604,16.489,10.979z' />
          <path d='M6,13.5c0,1.202,0.468,2.332,1.318,3.182l1.414-1.414C8.26,14.795,8,14.168,8,13.5s0.26-1.295,0.732-1.768 C9.204,11.26,9.832,11,10.5,11V9c-1.202,0-2.333,0.468-3.182,1.318C6.468,11.168,6,12.298,6,13.5z' />
        </svg>
      </BtnCard>
    </div>
  );
}
