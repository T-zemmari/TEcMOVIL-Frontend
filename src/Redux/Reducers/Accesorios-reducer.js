import {ACCESSORIOS} from '../Types';

const initialState = {
    Smartphones: {}
   
};

const accessoriosReducers = (state = initialState, action) => {
    switch(action.type){
        case ACCESSORIOS :
            return {
                ...state,
                accessorios : action.payload.accessorios,
               
            }

        
        default : 
            return state
    }
};

export default accessoriosReducers;