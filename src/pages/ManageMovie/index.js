import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input, Choice } from '@rocketseat/unform';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

import api from '~/services/api';
import history from '~/services/history';

import { Container, ChoiceContainer, RelatedInputs, Actions } from './styles';

import { addRequest, updateRequest } from '~/store/modules/movie/actions';

const schema = Yup.object().shape({
  title: Yup.string().required(),
  release_date: Yup.date(),
  box_office: Yup.number(),
  duration: Yup.number(),
  overview: Yup.string(),
  banner_url: Yup.string(),
  cover_url: Yup.string(),
  directed_by: Yup.string(),
  phase: Yup.number(),
  saga: Yup.string(),
  chronology: Yup.number(),
  related_movies: Yup.array(),
  related_tvshows: Yup.array(),
  characters: Yup.array(),
});

export default function ManageMovie({ match }) {
  const { id } = match.params;

  const [movie, setMovie] = useState({});
  const [choiceMovies, setChoiceMovies] = useState([]);
  const [choiceCharacters, setChoiceCharacters] = useState([]);
  const [choiceTvshows, setChoiceTvshows] = useState([]);

  const dispatch = useDispatch();

  async function newMovie() {
    const dataMovies = await api.get('movies');
    const dataCharacters = await api.get('characters');
    const dataTvshows = await api.get('tvshows');

    setChoiceMovies(
      dataMovies.data.data
        .filter(obj => obj.id !== parseInt(id, 10))
        .map(obj => ({ value: obj.id, label: obj.title }))
    );
    setChoiceCharacters(
      dataCharacters.data.data.map(obj => ({
        value: obj.id,
        label: obj.name,
      }))
    );
    setChoiceTvshows(
      dataTvshows.data.data.map(obj => ({
        value: obj.id,
        label: obj.title,
      }))
    );
  }

  async function editMovie() {
    const response = await api.get(`movies/${id}`);
    let { related: movies, tvshows, characters, ...data } = response.data;
    movies = movies.map(m => m.id);
    tvshows = tvshows.map(ts => ts.id);
    characters = characters.map(c => c.id);

    setMovie({
      ...data,
      related_movies: movies,
      related_tvshows: tvshows,
      characters,
    });

    await newMovie();
  }

  useEffect(() => {
    if (!id) {
      newMovie();
    } else {
      editMovie();
    }
  }, [id]);

  function handleSubmit(data) {
    if (!id) dispatch(addRequest(data));
    else dispatch(updateRequest(data, id));
  }

  return (
    <Container>
      <Form initialData={movie} schema={schema} onSubmit={handleSubmit}>
        <Input type="text" name="title" placeholder="Title" />
        <Input type="text" name="release_date" placeholder="Relsease date" />
        <Input name="box_office" type="number" placeholder="Box Office" />
        <Input name="duration" type="number" placeholder="Duration" />
        <Input name="overview" multiline placeholder="Overview" />
        <Input type="text" name="banner_url" placeholder="Banner URL" />
        <Input type="text" name="cover_url" placeholder="Cover URL" />
        <Input type="text" name="directed_by" placeholder="Directed By" />
        <Input name="phase" type="number" placeholder="Phase" />
        <Input type="text" name="saga" placeholder="Saga" />
        <Input name="chronology" type="number" placeholder="Chronology" />
        <RelatedInputs>
          <ChoiceContainer>
            <Choice name="related_movies" options={choiceMovies} multiple />
          </ChoiceContainer>
          <ChoiceContainer>
            <Choice name="related_tvshows" options={choiceTvshows} multiple />
          </ChoiceContainer>
          <ChoiceContainer>
            <Choice name="characters" options={choiceCharacters} multiple />
          </ChoiceContainer>
        </RelatedInputs>
        <Actions>
          <button type="button" onClick={() => history.push('/movies')}>
            BACK
          </button>
          <button type="submit">SAVE</button>
        </Actions>
      </Form>
    </Container>
  );
}

ManageMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

ManageMovie.defaultProps = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: null,
    }),
  }),
};
