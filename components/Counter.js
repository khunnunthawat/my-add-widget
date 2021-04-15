import React, { useState } from 'react';

export default function Counter() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button
        className='text-white focus:outline-none px-4 py-1 rounded-md bg-blue-500 hover:bg-blue-600'
        onClick={() => setCount(count + 1)}
      >
        Click me
      </button>
    </div>
  );
}
