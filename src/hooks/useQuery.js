import { useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

const useQuery = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = useMemo(() => {
    return [...searchParams.entries()].reduce(
      (acc, [key, value]) => ({ ...acc, [key]: value }),
      {}
    );
  }, [searchParams]);

  const handleAddQuery = useCallback(
    (data, replaceAll = false, removeField = []) => {
      removeField.forEach((field) => {
        delete query[field];
      });

      if (replaceAll) return setSearchParams(data);
      setSearchParams({ ...query, ...data });
    },
    [query, setSearchParams]
  );

  const handleRemoveQuery = useCallback(
    (name, replaceAll = false) => {
      if (replaceAll) return setSearchParams({});

      delete query[name];

      setSearchParams(query);
    },
    [query, setSearchParams]
  );

  return {
    query,
    onAddQuery: handleAddQuery,
    onRemoveQuery: handleRemoveQuery,
  };
};

export default useQuery;
