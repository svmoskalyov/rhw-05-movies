import { Box } from 'components/Box';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCasts } from 'services/api';

export const Cast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    getCasts(movieId).then(setCasts);
  }, [movieId]);

  return (
    <Box p={3}>
      {casts.length === 0 && <div>loading...</div>}
      {casts.map(({ id, name, character, profile_path }) => (
        <li key={id}>
          <img src={profile_path} alt={name} width="240" />
          {name}
          <p>Character: {character}</p>
        </li>
      ))}
    </Box>
  );
};
