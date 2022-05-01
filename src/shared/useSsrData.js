import React, { useState, useEffect, useRef } from 'react';

export default function useSsrData(initialData, dataFetchFunc, dataFetchParams = []) {
  const [data, setData] = useState(() => {
    return __isBrowser__
      ? window.__INITIAL_DATA__
      : initialData
  });

  const [isLoading, setIsLoading] = useState(data ? false : true);

  const needsInitialFetch = useRef(data ? false : true);

  useEffect(() => {
    if (needsInitialFetch.current) {
      setIsLoading(true);

      dataFetchFunc(...dataFetchParams)
        .then(newData => {
          setData(newData)
          setIsLoading(false);
        })
    }
    else {
      needsInitialFetch.current = true;
    }
  }, [needsInitialFetch])

  // Clear initial data after it's been used
  useEffect(() => {
    if (window.__INITIAL_DATA__) {
      window.__INITIAL_DATA__ = null
    }
  }, [])

  return { data, isLoading }
}