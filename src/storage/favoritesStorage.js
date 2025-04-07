const FAVORITES_KEY = 'cat_tinder_favorites';

//  Save a favorite cat
export const saveFavorite = (cat) => {
  const existingFavorites = getFavorites();
  const updatedFavorites = [...existingFavorites, cat];
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites));
};

// Get all favorites
export const getFavorites = () => {
  const favorites = localStorage.getItem(FAVORITES_KEY);
  return favorites ? JSON.parse(favorites) : [];
};

// Clear all favorites (optional for later!)
export const clearFavorites = () => {
  localStorage.removeItem(FAVORITES_KEY);
};