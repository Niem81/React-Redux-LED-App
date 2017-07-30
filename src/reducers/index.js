import {combineReducers} from 'redux';
import ActiveNumber from './reducer-led';

const rootReducers = combineReducers({
  activeNumber: ActiveNumber
})

export default rootReducers;
