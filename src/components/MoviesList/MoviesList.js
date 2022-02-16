import { Link, useLocation } from 'react-router-dom';
import styles from './MoviesList.module.css';

export default function MoviesList({ data, url, keyword }) {
  const location = useLocation();

  return (
    <ul className={styles.cardsList}>
      {data.map(({ id, poster_path, title }) => (
        <li key={id} className={styles.card}>
          <Link
            to={{
              pathname: `${url}/${id}`,
              state: {
                from: {
                  location,
                  keyword,
                },
              },
            }}
          >
            <p className={styles.title}>{title}</p>
            <img
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt={title}
              className={styles.poster}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
