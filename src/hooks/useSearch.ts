import { Tag } from 'features/tags/types';
import tagsData from 'mock/tags';
import { useCallback, useEffect, useMemo, useState } from 'react';
import useDebounceValue from './useDebouncedValue';

const useSearch = () => {
  const [keyword, setKeyword] = useState('');
  const [tags, setTags] = useState<Tag[]>([]);
  const debounceKeyword = useDebounceValue(keyword);
  const allTag = tagsData;

  const changeKeyword = useCallback((v: string) => setKeyword(v), []);
  const addTag = useCallback((v: Tag) => setTags([...tags, v]), [tags]);
  const deleteTag = useCallback(
    (id: string) => setTags(tags.filter((tag) => tag.id !== id)),
    [tags],
  );
  const resetTags = useCallback(() => setTags([]), []);
  const isSelectedTag = useCallback((tag: Tag) => tags.includes(tag), [tags]);

  useEffect(() => {
    // Todo: search apiの呼び出し
    console.log(debounceKeyword);
  }, [debounceKeyword]);

  return {
    changeKeyword,
    tags,
    allTag,
    isSelectedTag,
    addTag,
    deleteTag,
    resetTags,
  };
};

export default useSearch;
