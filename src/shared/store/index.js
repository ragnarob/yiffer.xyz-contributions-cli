import authReducer from './auth-reducer';
import themeReducer from './theme-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: authReducer,
  theme: themeReducer,
});

export default rootReducer;
