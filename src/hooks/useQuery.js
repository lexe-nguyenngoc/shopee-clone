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
    (data, replaceAll = false) => {
      if (replaceAll) return setSearchParams(data);
      setSearchParams({ ...query, ...data });
    },
    [query, setSearchParams]
  );

  return {
    query,
    onAddQuery: handleAddQuery,
  };
};

export default useQuery;
