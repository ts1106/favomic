import { useCallback, useMemo } from 'react';

const useDate = () => {
  const now = useMemo(() => new Date(), []);

  const diffMonth = useCallback(
    (d: Date): number => now.getMonth() - d.getMonth(),
    [now],
  );
  const diffHours = useCallback(
    (d: Date): number => now.getHours() - d.getHours(),
    [now],
  );
  const diffMinutes = useCallback(
    (d: Date): number => now.getMinutes() - d.getMinutes(),
    [now],
  );
  const diffSeconds = useCallback(
    (d: Date): number => now.getSeconds() - d.getSeconds(),
    [now],
  );

  return { diffMonth, diffHours, diffMinutes, diffSeconds };
};

export default useDate;
