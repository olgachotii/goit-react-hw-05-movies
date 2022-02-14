import {
  useParams,
  NavLink,
  useRouteMatch,
  Route,
  useHistory,
} from 'react-router-dom/cjs/react-router-dom.min';
import { useState, useEffect, lazy, Suspense } from 'react';
import { getMovieDetails } from 'services/api-service';

import styles from './Views.module.css';

const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState([]);

  const { url } = useRouteMatch();
  const { movieId } = useParams();

  const history = useHistory();

  const onGoBack = () => {
    history.goBack();
  };

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
          <button type="button" onClick={onGoBack}>
            Go back
          </button>
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
                  <NavLink to={`${url}/cast`} exact>
                    Cart
                  </NavLink>
                </li>
                <li>
                  <NavLink to={`${url}/reviews`} exact>
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
