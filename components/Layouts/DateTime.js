import React from 'react';

function DateTime() {

  let d = new Date()
  let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
  let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
  let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
  var n = d.toLocaleString([], { hour12: true });

  console.log(n);

  // let dateNow = `${n}`;
  let dateNow = `${mo} ${da},${ye}, ${n}`;
  // console.log(`${da}-${mo}-${ye}`);

  return (
    <div className='text-xs text-gray-400'>
      <div className='mt-6 -mb-2 text-center'>Added on {dateNow}</div>
    </div>
  );
}

export default DateTime
