import { useEffect, useState } from 'react';

const useDebounceValue = (value: string, delay = 1000) => {
  const [debounceValue, setDebounceValue] = useState<string>(value ?? '');

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debounceValue;
};

export default useDebounceValue;
