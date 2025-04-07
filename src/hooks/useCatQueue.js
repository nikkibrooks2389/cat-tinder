import { useState, useEffect, useCallback } from 'react';
import { getRandomCats } from '../services/CatService';

export const useCatQueue = (initialCount = 10, refillThreshold = 3) => {
  const [catQueue, setCatQueue] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCats = useCallback(async (count = initialCount) => {
    console.log('Fetching cats...', new Date().toISOString());
    setLoading(true);
    console.log('Fetching cats...');
    const cats = await getRandomCats(count);
    console.log(`Fetched ${cats.length} cats`, cats);
    setCatQueue(prev => {
      const updatedQueue = [...prev, ...cats];
      console.log('Updated queue:', updatedQueue);
      return updatedQueue;
    });
    setLoading(false);
  }, [initialCount]);
  
  useEffect(() => {
    fetchCats();
  }, [fetchCats]);

  const getNextCat = () => {
    const [nextCat, ...rest] = catQueue;
    console.log('Getting next cat:', nextCat);
    console.log('Queue before update:', catQueue);
    setCatQueue(rest);
    console.log('Queue after update:', rest);
  
    if (rest.length < refillThreshold) {
      console.log('Queue low — refilling...');
      fetchCats();
    }
  
    return nextCat;
  };

  return { catQueue, getNextCat, loading };
};
