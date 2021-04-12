import {
    FETCH_STORE_DETAILS,
    FETCH_CATEGORIES,
} from './types';

export const fetchStoreDetails = () => ({
    type: FETCH_STORE_DETAILS,
});

export const fetchCategories = () => ({
    type: FETCH_CATEGORIES,
});