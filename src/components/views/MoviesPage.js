import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouteMatch } from 'react-router-dom';
import { getSearch } from 'services/api-service';
import MoviesList from 'components/MoviesList/MoviesList';

export default function MoviesPageViews() {
  const [value, setValue] = useState('');
  const [data, setData] = useState([]);
  const [movie, setValue1] = useState('');
  const { url } = useRouteMatch();

  useEffect(() => {
    if (!movie) {
      return;
    }
    getSearch(movie).then(data => {
      setData(data.results);
    });
  }, [movie]);

  const hendleNameChange = e => {
    setValue(e.currentTarget.value.toLowerCase());
  };

  const hendleSubmit = e => {
    e.preventDefault();

    if (value.trim() === '') {
      return toast.warning('Enter at least one word');
    }
    setValue1(value);
    setValue('');
  };

  return (
    <>
      <form onSubmit={hendleSubmit}>
        <input
          type="text"
          name="value"
          value={value}
          onChange={hendleNameChange}
        />
        <button type="submit">Search</button>
      </form>
      <MoviesList url={url} data={data} />
    </>
  );
}
