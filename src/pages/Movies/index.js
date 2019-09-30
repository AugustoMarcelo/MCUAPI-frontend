import React, { useEffect, useState } from 'react';
import api from '~/services/api';
import history from '~/services/history';
import FAB from '~/components/FAB';
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

  function addMovie() {
    history.push('/movies/create');
  }

  return (
    <>
      <Grid>
        {movies.data.map(movie => (
          <ShineEffect key={String(movie.id)}>
            <Card
              src={movie.cover_url}
              title={movie.title}
              alt={`${movie.title} Cover`}
            />
          </ShineEffect>
        ))}
      </Grid>
      <FAB onClick={addMovie} />
    </>
  );
}
