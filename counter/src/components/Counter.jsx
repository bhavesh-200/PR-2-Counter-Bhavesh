import React, { useState } from 'react';

function Counter() {
  // Define state for the counter
  const [count, setCount] = useState(0);

  // Increment the counter
  const increment = () => setCount(count + 1);

  // Decrement the counter
  const decrement = () => setCount(count - 1);

  // Reset the counter
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter: {count}</h1>
      <button onClick={increment} style={{ marginRight: '10px' }}>
        Increment
      </button>
      <button onClick={decrement} style={{ marginRight: '10px' }}>
        Decrement
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;