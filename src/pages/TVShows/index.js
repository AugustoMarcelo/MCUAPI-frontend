import React, { useEffect, useState, useContext } from 'react';
import { FaPencilAlt, FaList } from 'react-icons/fa';

import api from '~/services/api';
import history from '~/services/history';
import FAB from '~/components/FAB';

import {
  Container,
  Card,
  Content,
  Title,
  Storyline,
  Info,
  Actions,
} from './styles';
import { RightSidebarContext } from '~/services/RightSidebarContext';

export default function TVShows() {
  const [tvshows, setTvshows] = useState({
    count: 0,
    data: [],
  });

  const { rightSidebarStatus, setRightSidebarStatus } = useContext(
    RightSidebarContext
  );

  useEffect(() => {
    async function loadTvshows() {
      const response = await api.get('tvshows');

      setTvshows({ ...response.data });
    }

    loadTvshows();
  }, []);

  function addTvshow() {
    history.push('/tvshows/create');
  }

  function showMoreInfo(tvshowId) {
    const { open } = rightSidebarStatus;

    if (open) {
      setRightSidebarStatus({ elementId: tvshowId });
    } else {
      setRightSidebarStatus({ open: !open, elementId: tvshowId });
    }
  }

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
            <button
              type="button"
              onClick={() => history.push(`/tvshows/edit/${tvshow.id}`)}
            >
              <FaPencilAlt size={20} />
            </button>
            <button type="button" onClick={() => showMoreInfo(tvshow.id)}>
              <FaList size={20} />
            </button>
          </Actions>
        </Card>
      ))}
      <FAB sidebarOpen={rightSidebarStatus.open} onClick={addTvshow} />
    </Container>
  );
}
