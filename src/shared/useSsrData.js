import React, { useState, useEffect, useRef } from 'react';

export default function useSsrData(initialData, dataFetchFunc, dataFetchParams = []) {
  const [data, setData] = useState(() => {
    return __isBrowser__ ? JSON.parse(document.body.getAttribute('data-initialdata')) : initialData;
  });

  const [isLoading, setIsLoading] = useState(data ? false : true);

  const needsInitialFetch = useRef(data ? false : true);

  useEffect(() => {
    if (needsInitialFetch.current) {
      setIsLoading(true);

      dataFetchFunc(...dataFetchParams).then(newData => {
        setData(newData);
        setIsLoading(false);
      });
    } else {
      needsInitialFetch.current = true;
    }
  }, [needsInitialFetch]);

  // Clear initial data after it's been used
  useEffect(() => {
    if (document.body.getAttribute('data-initialdata')) {
      document.body.removeAttribute('data-initialdata');
    }
  }, []);

  return { data, isLoading };
}
