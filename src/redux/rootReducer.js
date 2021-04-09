import { combineReducers } from 'redux';

//reducers
import bagReducer from './bag/reducer';

const rootReducer = combineReducers({
    bag: bagReducer,
});

export default rootReducer;