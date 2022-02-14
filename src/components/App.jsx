import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import { ToastContainer } from 'react-toastify';

import Container from './Container/Container';
import Navigation from './Navigation/Navigation';

const HomePage = lazy(() => import('./views/HomePage'));
const MoviesPage = lazy(() => import('./views/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./views/MovieDetailsPage'));

export const App = () => {
  return (
    <>
      <Container>
        <Navigation />
        <Suspense fallback={<h1>Загружаю...</h1>}>
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>

            <Route path="/movies" exact>
              <MoviesPage />
            </Route>

            <Route path="/movies/:movieId">
              <MovieDetailsPage />
            </Route>
          </Switch>
        </Suspense>
      </Container>

      <ToastContainer />
    </>
  );
};
