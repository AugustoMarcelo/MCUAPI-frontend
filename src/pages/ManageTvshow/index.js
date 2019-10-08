import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input, Choice, Select } from '@rocketseat/unform';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

import api from '~/services/api';
import history from '~/services/history';

import { Container, ChoiceContainer, RelatedInputs, Actions } from './styles';

import { addRequest, updateRequest } from '~/store/modules/tvshow/actions';

const schema = Yup.object().shape({
  title: Yup.string().required(),
  first_aired: Yup.date(),
  last_aired: Yup.date(),
  status: Yup.string(),
  storyline: Yup.string(),
  banner_url: Yup.string(),
  cover_url: Yup.string(),
  seasons: Yup.number(),
  total_episodes: Yup.number(),
  network: Yup.string(),
  related_movies: Yup.array(),
  characters: Yup.array(),
});

export default function ManageTvshow({ match }) {
  const { id } = match.params;
  const options = [
    { id: 'running', title: 'Running' },
    { id: 'cancelled', title: 'Cancelled' },
  ];

  const [tvshow, setTvshow] = useState({});
  const [choiceMovies, setChoiceMovies] = useState([]);
  const [choiceCharacters, setChoiceCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  async function newTvshow() {
    const dataMovies = await api.get('movies');
    const dataCharacters = await api.get('characters');

    setChoiceMovies(
      dataMovies.data.data.map(obj => ({ value: obj.id, label: obj.title }))
    );
    setChoiceCharacters(
      dataCharacters.data.data.map(obj => ({
        value: obj.id,
        label: obj.name,
      }))
    );
  }

  async function editTvshow() {
    setLoading(true);
    const response = await api.get(`tvshows/${id}`);
    let { movies, characters, ...data } = response.data;
    movies = movies.map(m => m.id);
    characters = characters.map(c => c.id);

    setTvshow({
      ...data,
      related_movies: movies,
      characters,
    });

    await newTvshow();
    setLoading(false);
  }

  useEffect(() => {
    if (!id) {
      newTvshow();
    } else {
      editTvshow();
    }
  }, [id]);

  function handleSubmit(data) {
    if (!id) dispatch(addRequest(data));
    else dispatch(updateRequest(data, id));
  }

  return (
    <Container>
      <Form initialData={tvshow} schema={schema} onSubmit={handleSubmit}>
        <Input type="text" name="title" placeholder="Title" />
        <Input type="text" name="first_aired" placeholder="First aired" />
        <Input type="text" name="last_aired" placeholder="Last aired" />
        <Input multiline name="storyline" placeholder="Storyline" />
        <Input type="text" name="banner_url" placeholder="Banner URL" />
        <Input type="text" name="cover_url" placeholder="Cover URL" />
        <Input type="text" name="network" placeholder="Network" />
        <Input type="number" name="seasons" placeholder="Number of Seasons" />
        <Input
          type="number"
          name="total_episodes"
          placeholder="Total number of episodes"
        />
        {!loading && (
          <Select
            name="status"
            options={options}
            placeholder="Set TvShow status"
          />
        )}
        <RelatedInputs>
          <ChoiceContainer>
            <Choice name="related_movies" options={choiceMovies} multiple />
          </ChoiceContainer>
          <ChoiceContainer>
            <Choice name="characters" options={choiceCharacters} multiple />
          </ChoiceContainer>
        </RelatedInputs>
        <Actions>
          <button type="button" onClick={() => history.push('/tvshows')}>
            BACK
          </button>
          <button type="submit">SAVE</button>
        </Actions>
      </Form>
    </Container>
  );
}

ManageTvshow.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

ManageTvshow.defaultProps = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: null,
    }),
  }),
};
