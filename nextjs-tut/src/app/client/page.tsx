'use client';

import { useState } from 'react';

export default function ClientPage() {
  const [count, setCount] = useState(0);
  return (
    <div className=''>
      <button
        className='text-xl btn btn-secondary '
        onClick={() => setCount(count + 1)}
      >
        Increase
      </button>
      <div className='text-xl '>{count}</div>
    </div>
  );
}
