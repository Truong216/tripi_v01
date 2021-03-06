import { port } from './constants';
const urlGetHotels = `${port}/getByID`;
import axios from 'axios';

function* getInforHotel(id) {
  let response;
  yield axios.get(`${urlGetHotels}/${id}`)
  .then(function (res) {
    // handle success
    console.log('res data',res.data);
    response = res.data;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    return response;
  });
  return response;
}

export const Api = {
  getInforHotel
}