import { useState } from 'react';

const Decrement = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count - 1);
  };

  return (
    <button onClick={handleIncrement}>
      - {count}
    </button>
  );
};

export default Decrement;