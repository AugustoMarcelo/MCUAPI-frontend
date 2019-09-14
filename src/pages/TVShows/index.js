import React, { useEffect, useState } from 'react';
import { FaPencilAlt, FaList, FaPlus } from 'react-icons/fa';

import api from '~/services/api';

import {
  Container,
  Card,
  Content,
  Title,
  Storyline,
  Info,
  Actions,
} from './styles';

export default function TVShows() {
  const [tvshows, setTvshows] = useState({
    count: 0,
    data: [],
  });

  useEffect(() => {
    async function loadTvshows() {
      const response = await api.get('tvshows');

      setTvshows({ ...response.data });
    }

    loadTvshows();
  }, []);

  return (
    <Container>
      {tvshows.data.map(tvshow => (
        <Card key={String(tvshow.id)}>
          <img src={tvshow.cover_url} alt={`${tvshow.title} cover`} />
          <Content>
            <Title>
              {`${tvshow.title} (${tvshow.first_aired.split('-', 1)})`}
            </Title>
            <Storyline>{tvshow.storyline}</Storyline>
            <Info>
              <div>
                <strong>Network</strong>
                <span>{tvshow.network}</span>
              </div>
              <div>
                <strong>Seasons</strong>
                <span>{tvshow.seasons}</span>
              </div>
              <div>
                <strong>Episodes</strong>
                <span>{tvshow.total_episodes}</span>
              </div>
              <div>
                <strong>Last Aired</strong>
                <span>{tvshow.last_aired}</span>
              </div>
              <div>
                <strong>Status</strong>
                <span>{tvshow.status}</span>
              </div>
            </Info>
          </Content>
          <Actions>
            <button type="button">
              <FaPencilAlt size={20} />
            </button>
            <button type="button">
              <FaList size={20} />
            </button>
          </Actions>
        </Card>
      ))}
      <button type="button">
        <FaPlus size={20} />
      </button>
    </Container>
  );
}
