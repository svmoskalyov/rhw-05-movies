import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Box } from 'components/Box';
import { getTrending } from 'services/api';
import { Loader } from 'components/Loader/Loader';
import { Title, List, Item } from './Home.styled';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrending().then(setMovies);
  }, []);

  return (
    <Box as="main" p={4}>
      <Title>Trending today</Title>
      {movies.length === 0 && <Loader />}

      <List>
        {movies.map(({ id, title }) => (
          <Item key={id}>
            <Link to={`movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </Item>
        ))}
      </List>
    </Box>
  );
};
