

import {ADD_TO_CARRITO,REMOVE_FROM_CARRITO,CLEAN_CARRITO} from '../Types'

const initialState = {

      carrito:[]
}

const carritoReducer =(state = initialState,action)=>{

    switch(action.type){

        case ADD_TO_CARRITO : {

            return {

                ...state,
                carrito:action.payload
            }
            
        }
        break;

        case REMOVE_FROM_CARRITO :{

            return {
                ...state ,
                carrito :action.payload
            }
        }
        break;

        case CLEAN_CARRITO : {

            return initialState
        }

        default : {
            return state
        }
    }
}

export default carritoReducer;