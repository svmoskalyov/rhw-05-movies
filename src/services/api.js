import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getTrending = async () => {
  const response = await axios.get('trending/movie/day?', {
    params: {
      api_key: '634387309f6bc4d8e17fedbf5dc6be14',
    },
  });
  return response.data.results;
};

export const getSearch = async query => {
  const response = await axios.get('search/movie?', {
    params: {
      api_key: '634387309f6bc4d8e17fedbf5dc6be14',
      query,
    },
  });
  return response.data.results;
};

export const getMovieId = async id => {
  const response = await axios.get(`movie/${id}?`, {
    params: {
      api_key: '634387309f6bc4d8e17fedbf5dc6be14',
    },
  });
  return response.data;
};

/*
const THE_KEY = '634387309f6bc4d8e17fedbf5dc6be14';


https://api.themoviedb.org/3/trending/movie/day?api_key=THE_KEY

https://api.themoviedb.org/3/search/movie?api_key=THE_KEY&query=comedy
https://api.themoviedb.org/3/search/movie?api_key=THE_KEY&query={query}

https://api.themoviedb.org/3/movie/505642?api_key=THE_KEY
https://api.themoviedb.org/3/movie/{movie_id}?api_key=THE_KEY

https://api.themoviedb.org/3/movie/505642/credits?api_key=THE_KEY
https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=THE_KEY

https://api.themoviedb.org/3/movie/505642/reviews?api_key=THE_KEY
https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=THE_KEY

*/
