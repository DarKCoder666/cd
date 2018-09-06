import { combineReducers } from 'redux';
import buildingsReducer from './buildingsReducer';
import mediaReducer from './mediaReduceer';

export default combineReducers({
    buildings: buildingsReducer,
    media: mediaReducer
});