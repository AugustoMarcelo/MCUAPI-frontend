import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { Container } from './styles';
import { addRequest } from '~/store/modules/character/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('Character name is required'),
  actor: Yup.string(),
  photo_url: Yup.string(),
  bio: Yup.string(),
});

export default function ManageCharacter() {
  const [character, setCharacter] = useState({});
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(addRequest(data));
  }

  function handlePreview(event) {
    setCharacter({ photo_url: event.target.value });
  }

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
        <Input
          name="bio"
          multiline
          defaultValue={character.bio}
          type="text"
          placeholder="Bio"
          autoComplete="off"
        />
        <button type="submit">SAVE</button>
      </Form>
    </Container>
  );
}
