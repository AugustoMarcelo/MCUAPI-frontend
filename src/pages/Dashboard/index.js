import React, { useEffect, useState } from 'react';

import api from '~/services/api';

import { Container, Card } from './styles';

export default function Dashboard() {
  const [data, setData] = useState({
    movies: {},
    tvshows: {},
    characters: {},
  });

  useEffect(() => {
    async function loadValues() {
      const movies = await api.get('/movies');
      const tvshows = await api.get('/tvshows');
      const characters = await api.get('/characters');

      setData({
        movies: movies.data,
        tvshows: tvshows.data,
        characters: characters.data,
      });
    }

    loadValues();
  }, []);

  return (
    <Container>
      <Card>
        <span>{data.movies.count}</span>
        <strong>Movies</strong>
      </Card>
      <Card>
        <span>{data.tvshows.count}</span>
        <strong>TV Shows</strong>
      </Card>
      <Card>
        <span>{data.characters.count}</span>
        <strong>Characters</strong>
      </Card>
    </Container>
  );
}
