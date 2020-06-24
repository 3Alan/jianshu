import { combineReducers } from 'redux-immutable';
import headerReducer from '../common/header/store/reducer';

export default combineReducers({
  header: headerReducer,
});
