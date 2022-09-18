import { useCallback, useState } from 'react';

const useToggle = (initialValue = false) => {
  const [state, setState] = useState(initialValue);

  const handleToggleState = useCallback(() => {
    setState((prevState) => !prevState);
  }, []);

  return [state, handleToggleState];
};

export default useToggle;
