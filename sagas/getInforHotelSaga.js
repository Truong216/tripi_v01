import { Api }  from './ApiGetInforHotel';
import { GET_INFOR_HOTEL, GET_INFOR_HOTEL_SUCCEEDED, GET_INFOR_HOTEL_FAILD } from '../redux/actionTypes';

import { put, takeLatest } from 'redux-saga/effects';
import { showLoading, hideLoading } from '../redux/actions';

function* getInforHotel({ payload }) {
  const { hotel_id} = payload;
  try {
    yield put(showLoading());
    const inforHotel = yield (Api.getInforHotel(hotel_id));
    console.log('getInforHotel - Saga', inforHotel);
    yield put({ type: GET_INFOR_HOTEL_SUCCEEDED, payload: { data: inforHotel } });  
  } 
  catch(err) {
    console.log('err');
    yield put({ type: GET_INFOR_HOTEL_FAILD, err });
  }
  yield put(hideLoading());
}

export function *watchGetInforHotel() {
  yield takeLatest(GET_INFOR_HOTEL, getInforHotel);
}