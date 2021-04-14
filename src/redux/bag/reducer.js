import {
    ADD_PRODUCT_TO_BAG,
    INCREASE_PRODUCT_QUANTITY,
    REDUCE_PRODUCT_QUANTITY,
} from './types';

const initialState = {
    products: [],
    itemTotal: 0,
    delivery: 300,
}

const bagReducer = (state=initialState, action) => {

    const isNewQuantityZero = productId => {
        let newQuantityIsZero = false;

        state.products.forEach(product => {
            if(product.id === productId && product.quantity - 1 === 0) {
                newQuantityIsZero = true;
            }
        });

        return newQuantityIsZero;
    }

    const changeQuantity = (productId, mathSign) => {
        const newProducts = state.products;
        let newItemTotal = state.itemTotal;

        state.products.forEach((product, index) => {
            if(product.id === productId) {
                if(mathSign === 'add') {
                    newProducts[index].quantity += 1;
                    if(product.discount_price) {
                        newItemTotal += product.discount_price;
                    } else {
                        newItemTotal += product.price;
                    }
                } else {
                    newProducts[index].quantity -= 1;
                    if(product.discount_price) {
                        newItemTotal -= product.discount_price;
                    } else {
                        newItemTotal -= product.price;
                    }
                }

            }
        });

        return [newProducts, newItemTotal];
    }

    switch(action.type){
        case ADD_PRODUCT_TO_BAG: 
            return {
                ...state,
                products: [
                    ...state.products,
                    {
                        ...action.payload,
                        quantity: 1,
                    }
                ],
                itemTotal: action.payload.discount_price ? state.itemTotal + action.payload.discount_price : state.itemTotal + action.payload.price,
            }
        case INCREASE_PRODUCT_QUANTITY:
            const [newProducts, newItemTotal] = changeQuantity(action.payload, 'add');
            return {
                ...state,
                products: newProducts,
                itemTotal: newItemTotal,
            }
        case REDUCE_PRODUCT_QUANTITY:
            if(isNewQuantityZero(action.payload)) {
                //eslint-disable-next-line
                const [_, newMItemTotal] = changeQuantity(action.payload);

                return {
                    ...state,
                    products: state.products.filter(product => product.id !== action.payload),
                    itemTotal: newMItemTotal,
                }
            }

            const [newMProducts, newM2ItemTotal] = changeQuantity(action.payload);

            return {
                ...state,
                products: newMProducts,
                itemTotal: newM2ItemTotal,
            }
        default:
            return state;
    }
}

export default bagReducer;