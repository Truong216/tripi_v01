import { Api }  from './Api';
import { FETCH_FAILD, FETCH_SUCCEEDED, FETCH_KEYWORD } from '../redux/actionTypes';

import { put, takeLatest, delay } from 'redux-saga/effects';

function* fetchKeyWord({payload}) {
  yield delay(500);
  console.log('fetch key word', payload);
  try {
    const receivedKeyWord = yield Api.getKeyWordSuggestion(payload.keyword);
    console.log(receivedKeyWord);
    yield put({ type: FETCH_SUCCEEDED, payload: { data: receivedKeyWord } });  
  } 
  catch(err) {
    console.log('err');
    yield put({ type: FETCH_FAILD, err });
  }
}

export function *watchFetchKeyWord() {
  yield takeLatest(FETCH_KEYWORD, fetchKeyWord);
}