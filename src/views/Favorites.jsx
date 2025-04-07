import React, { useEffect, useState } from 'react';
import { getFavorites , clearFavorites} from '../storage/favoritesStorage';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 16px;
  padding: 16px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = getFavorites();
    setFavorites(savedFavorites);
    console.log('Loaded favorites:', savedFavorites);
  }, []);

  const handleClearFavorites = () => {
    clearFavorites();
    setFavorites([]);
    console.log('Favorites cleared!');
  };

  if (favorites.length === 0) {
    return <p style={{ padding: '16px' }}>No favorites yet. Go like some cats! 😺</p>;
  }

  return (
    <div>
      <h1 style={{ padding: '16px' }}>Your Favorite Cats 🖼️</h1>
      <Grid>
        {favorites.map((cat) => (
          <Image key={cat.id} src={cat.url} alt="Favorite cat" />
        ))}
      </Grid>
      <button
  onClick={handleClearFavorites}
  style={{
    margin: '16px',
    padding: '8px 16px',
    backgroundColor: '#ff6b6b',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  }}
>
  Clear Favorites 🗑️
</button>
    </div>
  );
}

export default Favorites;