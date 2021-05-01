import {Smartphones} from '../Types';

const initialState = {
    Smartphones: {}
   
};

const smartphonesReducer = (state = initialState, action) => {
    switch(action.type){
        case Smartphones :
            return {
                ...state,
                smartphones : action.payload.smartphones,
               
            }

        
        default : 
            return state
    }
};

export default smartphonesReducer;