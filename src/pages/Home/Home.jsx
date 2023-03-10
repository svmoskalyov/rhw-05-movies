import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Box } from 'components/Box';
import { getTrending } from 'services/api';

export const Home = () => {
  const [movies, setMovies] = useState([]);
   const location = useLocation();

  useEffect(() => {
    getTrending().then(setMovies);
  }, []);

  return (
    <Box as="section" p={3}>
      <h2>Trending today</h2>
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </Box>
  );
};
