import React, { useState, useEffect } from 'react';
import { useCatQueue } from '../hooks/useCatQueue';
import CatImage from '../components/CatImage';
import NextCatButton from '../components/NextCatButton';
import LikeButton from '../components/LikeButton';
import { saveFavorite } from '../storage/favoritesStorage';

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

  const handleLike = () => {
    saveFavorite(currentCat);
    console.log('Liked cat:', currentCat);
    // We'll connect this to storage in the next step!
  };

  return (
    <div>
      <CatImage imageUrl={currentCat.url} />
      <NextCatButton onClick={handleNextCat} />
      <LikeButton onClick={handleLike} />
    </div>
  );
}

export default Home;