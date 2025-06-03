import { useState } from 'react';

export const useExample = () => {
  const [count, setCount] = useState(0);
  return { count, increment: () => setCount(c => c + 1) };
};
