import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import character from './character/sagas';
import movie from './movie/sagas';
import tvshow from './tvshow/sagas';

export default function* rootSaga() {
  return yield all([auth, user, character, movie, tvshow]);
}
