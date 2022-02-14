import { useState, useEffect } from 'react';
import { getRewiew } from 'services/api-service';

export default function Reviews({ movieId }) {
  const [text, setText] = useState('');

  useEffect(() => {
    getRewiew(movieId).then(data => {
      data.results.length > 0
        ? setText(data.results[0].content)
        : setText('there is no information yet :(');
    });
  }, [movieId]);

  return (
    <>
      <p>{text}</p>
    </>
  );
}
