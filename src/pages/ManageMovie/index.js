import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { Container } from './styles';

const schema = Yup.object().shape({
  title: Yup.string().required(),
});

export default function ManageMovie() {
  const [movie, setMovie] = useState({});

  return (
    <Container>
      <Form initialData={movie} schema={schema}>
        <Input name="title" placeholder="Hero name" />
        <button type="submit">SAVE</button>
      </Form>
    </Container>
  );
}
