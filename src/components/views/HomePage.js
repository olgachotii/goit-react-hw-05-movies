import { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { getTrending } from 'services/api-service';
import MoviesList from 'components/MoviesList/MoviesList';

export default function HomePage() {
  const { url } = useRouteMatch();
  const [muvies, setMuvies] = useState([]);

  useEffect(() => {
    getTrending().then(muvies => {
      setMuvies(muvies.results);
    });
  }, []);

  return <MoviesList url={`${url}movies`} data={muvies} />;
}
