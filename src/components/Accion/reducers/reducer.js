
import {ADD_TO_CART} from '../Constants';

const initialState = {

    cardData : []
}


const cartItem = (state = initialState,action)=>{


   switch(action.type){

    case ADD_TO_CART :

    return {
        ...state,
        cardData :action.cactData
    }

    default:
        return state



   }


}

export default cartItem;