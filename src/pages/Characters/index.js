import React, { useEffect, useState } from 'react';
import { FaPencilAlt, FaRegTrashAlt } from 'react-icons/fa';

import api from '~/services/api';
import history from '~/services/history';

import FAB from '~/components/FAB';
import { Grid, Card, HeroName, Name, Separator, Actions } from './styles';

export default function Characters() {
  const [characters, setCharacters] = useState({
    count: 0,
    data: [],
  });

  useEffect(() => {
    async function loadCharacters() {
      const response = await api.get('characters');

      setCharacters({ ...response.data });
    }

    loadCharacters();
  }, []);

  function addCharacter() {
    history.push('/characters/create');
  }

  return (
    <>
      <Grid>
        {characters.data.map(character => (
          <Card key={String(character.id)}>
            <img src={character.photo_url} alt={`${character.name}`} />
            <HeroName>{character.name.split('/', 1)}</HeroName>
            <Name>{character.name.split('/')[1]}</Name>
            <Separator />
            <Actions>
              <button type="button">
                <FaPencilAlt size={18} />
              </button>
              <button type="button">
                <FaRegTrashAlt size={18} color="#f0131e" />
              </button>
            </Actions>
          </Card>
        ))}
      </Grid>
      <FAB onClick={addCharacter} />
    </>
  );
}
