import React, { useState } from 'react';

const Counter = ({ defaultCounter }: { defaultCounter: number }) => {
  const [counter, setCounter] = useState<number>(defaultCounter);
  return (
    <div>
      <h1>My Counter: </h1>
      <button
        aria-label="Decrement"
        onClick={() => setCounter((prevC) => prevC - 1)}
      >
        -
      </button>
      <h1>Current count: {counter}</h1>
      <button
        aria-label="Increment"
        onClick={() => setCounter((prevC) => prevC + 1)}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
