import { all, call, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

export function* addTvshow({ payload }) {
  try {
    const { data } = payload;

    yield call(api.post, 'tvshows', {
      ...data,
    });

    toast.success('Successfully registered TVShow');

    history.push('/tvshows');
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

export function* updateTvshow({ payload }) {
  try {
    const { data } = payload;
    const { id } = payload;
    console.tron.log(data);
    yield call(api.put, `tvshows/${id}`, {
      ...data,
    });

    toast.success('TVShow successfully updated');

    history.push('/tvshows');
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

export default all([
  takeLatest('@tvshow/ADD_REQUEST', addTvshow),
  takeLatest('@tvshow/UPDATE_REQUEST', updateTvshow),
]);
