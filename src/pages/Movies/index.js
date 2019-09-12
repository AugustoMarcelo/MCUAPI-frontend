import React, { useEffect, useState } from 'react';
import api from '~/services/api';

import { Grid, Card } from './styles';

export default function Movies() {
  const [movies, setMovies] = useState({
    count: 0,
    data: [],
  });

  useEffect(() => {
    async function loadMovies() {
      const response = await api.get('movies');

      setMovies({ ...response.data });
    }

    loadMovies();
  }, []);
  return (
    <Grid>
      {movies.data.map(movie => (
        <Card
          key={String(movie.id)}
          src={movie.cover_url}
          alt={`${movie.title} Cover`}
        />
      ))}
    </Grid>
  );
}
