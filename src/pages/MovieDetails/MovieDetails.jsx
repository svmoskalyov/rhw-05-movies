import { useEffect, useState } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { Box } from 'components/Box';
import { getMovieId } from 'services/api';
import {
  NavItem,
  SubNavItem,
  Title,
  Subtitle,
  Text,
  List,
  Item,
  Subtext,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getMovieId(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return null;
  }

  const { poster_path, title, vote_average, overview, genres } = movie;
  const backLinkHref = location.state?.from ?? '/';

  return (
    <Box p={3}>
      <NavItem to={backLinkHref}>Go back</NavItem>

      <Box display="flex" p={4} borderBottom="1px solid black">
        <img
          loading="lazy"
          src={
            poster_path && `https://image.tmdb.org/t/p/original${poster_path}`
          }
          alt={title}
          width="240"
          height="360"
        />
        <Box pl={5}>
          <Title>{title}</Title>
          <Text>User scores: {vote_average?.toFixed(1)}</Text>
          <Subtitle>Overview</Subtitle>
          <Text>{overview}</Text>
          <Subtitle>Genres</Subtitle>
          {genres?.map(({ id, name }) => (
            <Subtext key={id}>{name}</Subtext>
          ))}
        </Box>
      </Box>
      <Box p={3} borderBottom="1px solid black">
        <Subtitle>Additional information</Subtitle>
        <List>
          <Item>
            <SubNavItem to={'cast'} state={{ from: backLinkHref }}>
              Cast
            </SubNavItem>
          </Item>
          <Item>
            <SubNavItem to={'reviews'} state={{ from: backLinkHref }}>
              Reviews
            </SubNavItem>
          </Item>
        </List>
      </Box>

      <Outlet />
    </Box>
  );
};

export default MovieDetails;
