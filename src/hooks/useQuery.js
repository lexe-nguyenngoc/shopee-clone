import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

const useQuery = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = useMemo(() => {
    return [...searchParams.entries()].reduce(
      (acc, [key, value]) => ({ ...acc, [key]: value }),
      {}
    );
  }, [searchParams]);

  return {
    query,
    onAddQuery: setSearchParams,
  };
};

export default useQuery;
