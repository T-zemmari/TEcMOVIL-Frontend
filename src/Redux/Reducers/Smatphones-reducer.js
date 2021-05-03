import {SMARTPHONE} from '../Types';

const initialState = {
    smartphone: [],
   
};

const smartphonesReducer = (state = initialState, action) => {


    switch(action.type){


        case SMARTPHONE :
            return {
                ...state,
                smartphone : action.payload
               
            }

        
        default : 
            return state
    }
};

export default smartphonesReducer;