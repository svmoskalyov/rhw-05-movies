import { Box } from 'components/Box';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { useState, useEffect } from 'react';
import { Outlet, Link, useParams, useLocation } from 'react-router-dom';
import { getSearch } from 'services/api';

const Movies = () => {
  const [request, setRequest] = useState('');
  const [movies, setMovies] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    if (!request) {
      return;
    }

    getSearch(request).then(setMovies);
  }, [request]);

  return (
    <Box as="section" p={3}>
      {movieId ? (
        <Outlet />
      ) : (
        <Box p={3}>
          <Searchbar onSubmit={setRequest} />

          <ul>
            {movies.map(({ id, title }) => (
              <li key={id}>
                <Link to={`${id}`} state={{ from: location }}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </Box>
      )}
    </Box>
  );
};

export default Movies;
