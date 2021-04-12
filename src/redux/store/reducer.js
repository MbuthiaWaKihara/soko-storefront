import {
    SET_SELECTED_CATEGORY,
} from './types';

import cup1 from '../../images/cup1.jpg';
import cup2 from '../../images/cup2.jpg';
import cup3 from '../../images/cup3.jpg';
import cup4 from '../../images/cup4.jpg';
import cup5 from '../../images/cup5.jpg';

const initialState = {
    selectedCategory: {
        name: 'Cups',
        image_url: cup1,
        products: [
            {
                name: 'Floating Cup (white)',
                description: '',
                images: [cup1],
                price: 550,
                discount_price: 400,
            },
            {
                name: 'Modern Ceramic Cup',
                description: '',
                images: [cup2],
                price: 100,
            },
            {
                name: 'Le Gucci',
                description: '',
                images: [cup3],
                price: 250,
                discount_price: 200,
            },
            {
                name: 'Timber Old School',
                description: '',
                images: [cup4],
                price: 1000,
            },
            {
                name: 'Genius Tea Cup',
                description: '',
                images: [cup5],
                price: 250,
            },
        ]
    },
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