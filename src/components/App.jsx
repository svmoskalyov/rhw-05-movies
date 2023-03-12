import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Layout } from 'components/Layout/Layout';
import { Home } from 'pages/Home/Home';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';

const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />}>
            <Route path=":movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
          <Route path="*" element={<div>NotFound</div>} />
        </Route>
      </Routes>

      <ToastContainer autoClose={3000} theme="colored" position="top-center" />
    </>
  );
};
