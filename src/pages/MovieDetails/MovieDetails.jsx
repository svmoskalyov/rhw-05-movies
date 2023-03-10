import { Box } from 'components/Box';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams, useLocation, Outlet, Link } from 'react-router-dom';
import { getMovieId } from 'services/api';
import { NavItem } from './MovieDetails.styled';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getMovieId(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return null;
  }

  // console.log(movie);

  const { title, popularity, overview } = movie;
  // const { title, popularity, overview, genres } = movie;
  const backLinkHref = location.state?.from ?? '/';

  //   console.log(genres);

  return (
    <Box p={3}>
      <NavItem to={backLinkHref}>Go back</NavItem>

      <Box p={3} borderBottom="1px solid black">
        {/* <img src={poster_path} alt={title} width="240" /> */}
        <h2>{title}</h2>
        <p>{popularity}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        {/* {genres.length > 0 && (
        <ul>
          {genres.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      )} */}
        {/* {genres.map(({ id, name }) => (
        <span key={id}>{name} </span>
      ))} */}
      </Box>
      <Box p={3} borderBottom="1px solid black">
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to={'cast'}>Cast</Link>
          </li>
          <li>
            <Link to={'reviews'}>Reviews</Link>
          </li>
        </ul>
      </Box>

      <Outlet />
    </Box>
  );
};
