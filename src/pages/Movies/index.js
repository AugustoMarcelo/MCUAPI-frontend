import React, { useEffect, useState } from 'react';
import api from '~/services/api';

import { Grid, Card, ShineEffect } from './styles';

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
        <ShineEffect key={String(movie.id)}>
          <Card src={movie.cover_url} alt={`${movie.title} Cover`} />
        </ShineEffect>
      ))}
    </Grid>
  );
}
