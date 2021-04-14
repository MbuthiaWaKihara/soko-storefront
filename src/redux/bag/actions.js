import {
    ADD_PRODUCT_TO_BAG,
    INCREASE_PRODUCT_QUANTITY,
    REDUCE_PRODUCT_QUANTITY,
} from './types';

export const addProductToBag = product => ({
    type: ADD_PRODUCT_TO_BAG,
    payload: product,
});

export const increaseProductQuantity = productId => ({
    type: INCREASE_PRODUCT_QUANTITY,
    payload: productId,
});

export const reduceProductQuantity = productId => ({
    type: REDUCE_PRODUCT_QUANTITY,
    payload: productId,
});