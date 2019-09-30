import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

import history from '~/services/history';
import api from '~/services/api';

import { Container, Actions } from './styles';
import { addRequest, updateRequest } from '~/store/modules/character/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('Character name is required'),
  actor: Yup.string(),
  photo_url: Yup.string(),
  bio: Yup.string(),
});

export default function ManageCharacter({ match }) {
  const { id } = match.params;
  const [character, setCharacter] = useState({});
  const dispatch = useDispatch();

  function handleSubmit(data) {
    if (!id) dispatch(addRequest(data));
    else dispatch(updateRequest(data, id));
  }

  function handlePreview(event) {
    setCharacter({ ...character, photo_url: event.target.value });
  }

  useEffect(() => {
    if (!id) return;

    async function getCharacter() {
      const response = await api.get(`characters/${id}`);

      setCharacter({ ...response.data });
    }

    getCharacter();
  }, [id]);

  return (
    <Container>
      <div className="preview">
        {character.photo_url && (
          <img src={character.photo_url} alt="Character" />
        )}
      </div>
      <Form initialData={character} schema={schema} onSubmit={handleSubmit}>
        <Input
          name="name"
          defaultValue={character.name}
          type="text"
          placeholder="Name"
          autoComplete="off"
        />
        <Input
          name="actor"
          defaultValue={character.actor}
          type="text"
          placeholder="Actor Name"
          autoComplete="off"
        />
        <Input
          name="photo_url"
          defaultValue={character.photo_url}
          type="text"
          placeholder="Photo URL"
          onBlur={handlePreview}
          autoComplete="off"
        />
        <Input name="bio" multiline placeholder="Bio" autoComplete="off" />
        <Actions>
          <button type="button" onClick={() => history.push('/characters')}>
            BACK
          </button>
          <button type="submit">SAVE</button>
        </Actions>
      </Form>
    </Container>
  );
}

ManageCharacter.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

ManageCharacter.defaultProps = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: null,
    }),
  }),
};
