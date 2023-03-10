import { Box } from 'components/Box';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviws } from 'services/api';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviws, setReviws] = useState([]);

  useEffect(() => {
    getReviws(movieId).then(setReviws);
  }, [movieId]);

  return (
    <Box p={3}>
      {reviws.length > 0
        ? reviws.map(({ id, author, content }) => (
            <li key={id}>
              <b>{author}</b>
              <p>{content}</p>
            </li>
          ))
        : "We don't have any reviews for this movie."}
    </Box>
  );
};
