
import {ADD_TO_CART} from './Constants';
const addToCart = (data)=>{

    return {
        type:ADD_TO_CART,
        data: data
    }
    
}

const removeFromCart = (data)=>{

    return {
        type:'REMOVE_FROM_CART',
        data: data
    }
    
}