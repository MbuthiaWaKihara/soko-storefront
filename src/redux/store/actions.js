import {
    SET_SELECTED_CATEGORY,
    SET_SELECTED_PRODUCT,
} from './types';

export const setSelectedCategory = category => ({
    type: SET_SELECTED_CATEGORY,
    payload: category,
});

export const setSelectedProduct = product => ({
    type: SET_SELECTED_PRODUCT,
    payload: product,
});
