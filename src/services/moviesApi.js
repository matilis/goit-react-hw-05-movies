import axios from 'axios';

const API_KEY = '45f0d308fa374f4025dda5073ba79c7e';

export const fetchMoviesTrending = async () => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day',
    {
      params: {
        api_key: API_KEY,
      },
    }
  );
  return response.data.results;
};

export const searchMovies = async query => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie`,
    {
      params: {
        api_key: API_KEY,
        query: query,
      },
    }
  );
  return response.data.results;
};

export const getMovieDetails = async id => {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data;
};

export const getMovieCredits = async id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits`,
    {
      params: {
        api_key: API_KEY,
      },
    }
  );
  return response.data.cast;
};

export const getReviews = async id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews`,
    {
      params: {
        api_key: API_KEY,
      },
    }
  );
  return response.data.results;
};
