

import { ADD_TO_CARRITO, REMOVE_FROM_CARRITO, CLEAN_CARRITO } from '../Types';



const initialState = {

    carrito: [],
    currentItem: null,
}

const carritoReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_TO_CARRITO: {

            return {

                ...state,
                carrito: [...state.carrito, action.payload]
            }

        }
            break;



        case CLEAN_CARRITO: {

            return initialState
        }

        case REMOVE_FROM_CARRITO:
            const numIndex = parseInt(action.payload)
            return {
                ...state,
                carrito: [
                    ...state.carrito.slice(0, numIndex),
                    ...state.carrito.slice(numIndex + 1)
                ]
            }

        default: {
            return state
        }
    }
}



export default carritoReducer;