import { takeLatest, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

export function* addMovie({ payload }) {
  try {
    const { data } = payload;

    yield call(api.post, 'movies', {
      ...data,
    });

    toast.success('Successfully registered movie');

    history.push('/movies');
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

export function* updateMovie({ payload }) {
  try {
    const { data } = payload;
    const { id } = payload;

    yield call(api.put, `movies/${id}`, {
      ...data,
    });

    toast.success('Movie successfully updated');

    history.push('/movies');
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

export default all([
  takeLatest('@movie/ADD_REQUEST', addMovie),
  takeLatest('@movie/UPDATE_REQUEST', updateMovie),
]);
