import {SMARTPHONES} from '../Types';

const initialState = {
    Smartphones: {}
   
};

const smartphonesReducer = (state = initialState, action) => {
    switch(action.type){
        case SMARTPHONES :
            return {
                ...state,
                smartphones : action.payload.smartphones,
               
            }

        
        default : 
            return state
    }
};

export default smartphonesReducer;