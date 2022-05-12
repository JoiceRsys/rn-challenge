import {combineReducers} from '@reduxjs/toolkit';
import authReducer from './slices/auth';
import loadingReducer from './slices/loading';

const rootReducer = combineReducers({
  auth: authReducer,
  loading: loadingReducer,
});

export default rootReducer;
