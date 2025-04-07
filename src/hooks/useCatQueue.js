import { useState, useEffect, useCallback } from 'react';
import { getRandomCats } from '../services/CatService';

export const useCatQueue = (initialCount = 10, refillThreshold = 3) => {
  const [catQueue, setCatQueue] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCats = useCallback(async (count = initialCount) => {
    setLoading(true);
    const cats = await getRandomCats(count);
    setCatQueue(prev => [...prev, ...cats]);
    setLoading(false);
  }, [initialCount]);

  useEffect(() => {
    fetchCats();
  }, [fetchCats]);

  const getNextCat = () => {
    const [nextCat, ...rest] = catQueue;
    setCatQueue(rest);

    if (rest.length < refillThreshold) {
      fetchCats();
    }

    return nextCat;
  };

  return { catQueue, getNextCat, loading };
};
