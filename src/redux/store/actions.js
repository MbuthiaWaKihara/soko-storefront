import {
    SET_SELECTED_CATEGORY,
} from './types';

export const setSelectedCategory = category => ({
    type: SET_SELECTED_CATEGORY,
    payload: category,
});
