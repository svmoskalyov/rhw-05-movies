import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '634387309f6bc4d8e17fedbf5dc6be14';

export const getTrending = async () => {
  try {
    const response = await axios.get('trending/movie/day?', {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.results;
  } catch (error) {
    toast.error(error.message);
  }
};

export const getSearch = async query => {
  try {
    const response = await axios.get('search/movie?', {
      params: {
        api_key: API_KEY,
        query,
      },
    });
    return response.data.results;
  } catch (error) {
    toast.error(error.message);
  }
};

export const getMovieId = async id => {
  try {
    const response = await axios.get(`movie/${id}?`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    toast.error(error.message);
  }
};

export const getCasts = async id => {
  try {
    const response = await axios.get(`movie/${id}/credits?`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.cast;
  } catch (error) {
    toast.error(error.message);
  }
};

export const getReviws = async id => {
  try {
    const response = await axios.get(`movie/${id}/reviews?`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.results;
  } catch (error) {
    toast.error(error.message);
  }
};
