
import {ACCESSORIO } from '../Types';

const initialState = {
    accessorio: []
   
};

const accessorioReducer = (state = initialState, action) => {
    switch(action.type){
        case ACCESSORIO:
            return {
                ...state,
                accessorio: action.payload
            }
        
        default:
            return state
    }
};

export default accessorioReducer;