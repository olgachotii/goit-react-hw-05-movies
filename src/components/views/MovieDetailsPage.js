import {
  useParams,
  NavLink,
  useRouteMatch,
  Route,
  // useHistory,
  useLocation,
} from 'react-router-dom/cjs/react-router-dom.min';
import { useState, useEffect, lazy, Suspense } from 'react';
import { getMovieDetails } from 'services/api-service';

import styles from './Views.module.css';
import { Link } from 'react-router-dom';

const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState([]);

  const { url } = useRouteMatch();
  const { movieId } = useParams();

  // const history = useHistory();
  const location = useLocation();

  // const onGoBack = () => {
  //   history.push(location?.state?.from.location ?? '/');
  // };

  useEffect(() => {
    getMovieDetails(movieId).then(data => {
      setMovie(data);
    });
  }, [movieId]);

  const { title, popularity, overview, poster_path, genres } = movie;

  return (
    <>
      {movie && (
        <>
          {/* <button type="button" onClick={onGoBack}>
            Go back
          </button> */}
          <Link
            to={{
              pathname: location?.state?.from.location.pathname ?? '/',
              state: {
                from: {
                  location: location.state.from,
                },
              },
            }}
          >
            Go back
          </Link>

          <div className={styles.container}>
            <div>
              <h3>{`${title}`}</h3>
              {poster_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                  alt={title}
                  className={styles.poster}
                />
              )}
            </div>
            <div className={styles.overview}>
              <p>{`popularity: ${popularity}`}</p>
              <h3>Overview</h3>
              <p>{overview}</p>
              <h3>genres</h3>
              <ul className={styles.genresList}>
                {genres &&
                  genres.map(({ id, name }) => (
                    <li key={id} className={styles.genresItem}>
                      {name}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <div>
            <div className={styles.additional}>
              <ul>
                <li>
                  <NavLink
                    to={{
                      pathname: `${url}/cast`,
                      state: {
                        from: location.state.from,
                      },
                    }}
                    exact
                  >
                    Cart
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={{
                      pathname: `${url}/reviews`,
                      state: {
                        from: location.state.from,
                      },
                    }}
                    exact
                  >
                    Reviews
                  </NavLink>
                </li>
              </ul>
            </div>

            <Suspense fallback={<h1>Загружаю...</h1>}>
              <Route path={`${url}/cast`} exact>
                <Cast movieId={movieId} />
              </Route>
              <Route path={`${url}/reviews`} exact>
                <Reviews movieId={movieId} />
              </Route>
            </Suspense>
          </div>
        </>
      )}
    </>
  );
}
