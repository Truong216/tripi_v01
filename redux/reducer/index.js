import { combineReducers } from 'redux';

import loginReducer from './loginReducer';
import keyWordReducer from './keyWordReducer';
import getHotelReducer from './getHotelReducer';
import getInforHotelReducer from './getInforHotelReducer';
import loadingReducer from './loadingReducer';
import filterReducer from './filterReducer';
import getAllPriceReducer from './getAllPriceReducer';
import getMinPriceReducer from './getMinPriceReducer';
import getUrlHotelReducer from './getUrlHotelReducer';

const reducer = combineReducers({
  loginReducer,
  keyWordReducer,
  getHotelReducer,
  getInforHotelReducer,
  loadingReducer,
  filterReducer,
  getAllPriceReducer,
  getMinPriceReducer,
  getUrlHotelReducer,
})

export default reducer;