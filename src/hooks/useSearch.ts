import { useCallback, useEffect, useState } from 'react';
import useDebounceValue from './useDebouncedValue';

const useSearch = () => {
  const [keyword, setKeyword] = useState('');
  const [tags, setTags] = useState(['異世界', 'アクション', 'テスト']);
  const debounceKeyword = useDebounceValue(keyword);

  const changeKeyword = useCallback((v: string) => setKeyword(v), []);
  const addTag = useCallback((v: string) => setTags([...tags, v]), [tags]);
  const deleteTag = useCallback(
    (v: string) => setTags(tags.filter((tag, index) => tag !== v)),
    [tags],
  );

  const resetTags = useCallback(() => setTags([]), []);

  useEffect(() => {
    // Todo: search apiの呼び出し
    console.log(debounceKeyword);
  }, [debounceKeyword]);

  return { changeKeyword, tags, addTag, deleteTag, resetTags };
};

export default useSearch;
