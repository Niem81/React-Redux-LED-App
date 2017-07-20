import {combineReducers} from 'redux';
import ActiveNumber from './reducer-led'
import SegmentReducer from './reducer-segments'

const rootReducers = combineReducers({
  activeNumber: ActiveNumber,
  segments: SegmentReducer
})

export default rootReducers;
