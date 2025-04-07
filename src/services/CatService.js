const API_KEY = 'live_WdPCtFJwPY8o98NuI3EDZccxuqW5buFcJCZn4axdEfV9tk8RYb1y5Mm1uvELnbc9';

export const getRandomCats = async (limit = 10) => {
  try {
    const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=${limit}&size=full`, {
      headers: {
        'x-api-key': API_KEY,
      },
    });
    const data = await response.json();
    return data; // Already an array of cat objects
  } catch (error) {
    console.error('Error fetching cats:', error);
    return [];
  }
};