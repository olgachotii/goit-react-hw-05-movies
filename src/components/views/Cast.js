import { useState, useEffect } from 'react';
import { getCast } from 'services/api-service';
import styles from './Views.module.css';

export default function Cart({ movieId }) {
  const [actors, setActor] = useState([]);

  useEffect(() => {
    getCast(movieId).then(data => {
      setActor(data.cast);
    });
  }, [movieId]);

  return (
    <>
      <ul className={styles.castList}>
        {actors &&
          actors.map(({ id, original_name, profile_path }) => (
            <li key={id} className={styles.castItem}>
              <p>{original_name}</p>

              {profile_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                  alt={original_name}
                  className={styles.portrait}
                />
              )}
            </li>
          ))}
      </ul>
    </>
  );
}
