import {
    FETCH_STORE_DETAILS,
    FETCH_CATEGORIES,
    FETCH_PRODUCTS_IN_CATEGORY,
} from './types';

export const fetchStoreDetails = () => ({
    type: FETCH_STORE_DETAILS,
});

export const fetchCategories = () => ({
    type: FETCH_CATEGORIES,
});

export const fetchProductsInCategory = () => ({
    type: FETCH_PRODUCTS_IN_CATEGORY,
});