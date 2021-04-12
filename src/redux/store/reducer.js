import {
    SET_SELECTED_CATEGORY,
} from './types';

const initialState = {
    selectedCategory: {},
}

const storeReducer = (state=initialState, action) => {
    switch(action.type) {
        case SET_SELECTED_CATEGORY:
            return {
                ...state,
                selectedCategory: action.payload,
            }

        default:
            return state;
    }
}

export default storeReducer;