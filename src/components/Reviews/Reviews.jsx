import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from 'components/Box';
import { getReviws } from 'services/api';
import { List, Item, Author, Content } from './Reviews.styled';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviws] = useState([]);

  useEffect(() => {
    getReviws(movieId).then(setReviws);
  }, [movieId]);

  return (
    <Box p={3}>
      {reviews.length > 0 ? (
        <List>
          {reviews.map(({ id, author, content }) => (
            <Item key={id}>
              <Author>{author}</Author>
              <Content>{content}</Content>
            </Item>
          ))}
        </List>
      ) : (
        <Box p={3}>We don't have any reviews for this movie.</Box>
      )}
    </Box>
  );
};
