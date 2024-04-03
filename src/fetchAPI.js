import axios from 'axios';

const BASE_URL = '9e4afdd0caacb031d7d51312a2d345eb';

export const fetchMovie = async query => {
  const URL = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
  const options = {
    params: {
      api_key: BASE_URL,
    },
  };

  try {
    const response = await axios.get(URL, options);
    return response.data;
  } catch (error) {
    console.error("Didn't work");
    throw error;
  }
};

export const fetchDetails = async movieId => {
  const URL = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;

  const options = {
    params: {
      api_key: BASE_URL,
    },
  };
  try {
    const response = await axios.get(URL, options);
    return response.data;
  } catch (error) {
    console.error("Didn't work");
    throw error;
  }
};

export const fetchCast = async movieId => {
  const URL = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`;
  const options = {
    params: {
      api_key: BASE_URL,
    },
  };
  try {
    const response = await axios.get(URL, options);
    return response.data;
  } catch (error) {
    console.error("Didn't work");
    throw error;
  }
};

export const fetchReviews = async movieId => {
  const URL = `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`;
  const options = {
    params: {
      api_key: BASE_URL,
    },
  };
  try {
    const response = await axios.get(URL, options);
    return response.data;
  } catch (error) {
    console.error("Didn't work");
    throw error;
  }
};

export const fetchMovies = async () => {
  const URL = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
  const options = {
    params: {
      api_key: BASE_URL,
    },
  };
  try {
    const response = await axios.get(URL, options);
    return response.data;
  } catch (error) {
    console.error("Didn't work");
    throw error;
  }
};
