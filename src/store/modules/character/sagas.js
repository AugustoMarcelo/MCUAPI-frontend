import { takeLatest, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

export function* addCharacter({ payload }) {
  try {
    const { name, actor, photo_url, bio } = payload.data;

    yield call(api.post, 'characters', {
      name,
      actor,
      photo_url,
      bio,
    });
    toast.success('Character added success');
    history.push('/characters');
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

export default all([takeLatest('@character/ADD_REQUEST', addCharacter)]);
