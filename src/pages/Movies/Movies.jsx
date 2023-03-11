import { useState, useEffect } from 'react';
import { Outlet, Link, useParams, useLocation } from 'react-router-dom';
import { Box } from 'components/Box';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { getSearch } from 'services/api';
import { List, Item } from './Movies.styled';

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
    <Box as="main" p={3}>
      {movieId ? (
        <Outlet />
      ) : (
        <Box p={3}>
          <Searchbar onSubmit={setRequest} />

          {movies.length > 0 && (
            <List>
              {movies.map(({ id, title }) => (
                <Item key={id}>
                  <Link to={`${id}`} state={{ from: location }}>
                    {title}
                  </Link>
                </Item>
              ))}
            </List>
          )}
        </Box>
      )}
    </Box>
  );
};

export default Movies;
