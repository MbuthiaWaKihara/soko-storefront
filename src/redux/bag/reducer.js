const initialState = {
    products: [],
    itemTotal: 0,
    delivery: 300,
}

const bagReducer = (state=initialState, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default bagReducer;