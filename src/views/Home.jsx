import React, { useState, useEffect } from 'react';
import { useCatQueue } from '../hooks/useCatQueue';
import CatImage from '../components/CatImage';
import NextCatButton from '../components/NextCatButton';

function Home() {
  const { catQueue, getNextCat, loading } = useCatQueue();
  const [currentCat, setCurrentCat] = useState(null);

  useEffect(() => {
    if (catQueue.length > 0 && !currentCat) {
      setCurrentCat(catQueue[0]);
    }
  }, [catQueue, currentCat]);

  const handleNextCat = () => {
    const nextCat = getNextCat();
    if (nextCat) {
      setCurrentCat(nextCat);
    }
  };

  if (!currentCat || loading) {
    return <p>Loading cat...</p>;
  }

  return (
    <div>
      <CatImage imageUrl={currentCat.url} />
      <NextCatButton onClick={handleNextCat} />
    </div>
  );
}

export default Home;