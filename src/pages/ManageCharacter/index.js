import React from 'react';

import { Container } from './styles';

export default function ManageCharacter() {
  return (
    <Container>
      <div className="preview" />
      <form>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Actor Name" />
        <input type="text" placeholder="Photo URL" />
        <input type="text" placeholder="Bio" />
        <button type="button">SAVE</button>
      </form>
    </Container>
  );
}
