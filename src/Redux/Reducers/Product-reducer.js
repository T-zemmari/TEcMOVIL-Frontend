import { PRODUCT } from '../Types';


const initialState = {

    product: {}
}

const productReducer = (state = initialState, action) => {



    switch (action.type) {

        case PRODUCT:

            {
                return {
                    ...state,
                    product: action.payload
                }
            }
            break;
        default: {
            return state
        }
    }
}

export default productReducer;