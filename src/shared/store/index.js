import authReducer from './auth-reducer';
import themeReducer from './theme-reducer';
import { combineReducers } from 'redux';

// Just some example stuff
const rootReducer = combineReducers({
  auth: authReducer,
  theme: themeReducer,
});

export default rootReducer;
