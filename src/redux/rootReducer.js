import { combineReducers } from 'redux';

//reducers
import bagReducer from './bag/reducer';
import storeReducer from './store/reducer';

const rootReducer = combineReducers({
    bag: bagReducer,
    store: storeReducer,
});

export default rootReducer;