import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from 'components/Box';
import { getCasts } from 'services/api';
import { Loader } from 'components/Loader/Loader';
import { List, Item, Name, Character } from './Cast.styled';
import NoImage from 'images/no-image-available.png';

export const Cast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    getCasts(movieId).then(setCasts);
  }, [movieId]);

  return (
    <Box p={3}>
      {casts.length === 0 && <Loader />}
      <List>
        {casts.map(({ id, name, character, profile_path }) => (
          <Item key={id}>
            <img
              loading="lazy"
              src={
                !profile_path
                  ? `${NoImage}`
                  : `https://image.tmdb.org/t/p/w200${profile_path}`
              }
              alt={name}
              width="200"
              height="300"
            />
            <Name>{name}</Name>
            <Character>Character: {character}</Character>
          </Item>
        ))}
      </List>
    </Box>
  );
};
