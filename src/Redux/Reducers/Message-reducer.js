import {QUEUE_MESSAGE, DELETE_MESSAGE} from '../Types';

const initialState = {};

const messageReducer = (state = initialState, action) => {
    switch(action.type){
        case QUEUE_MESSAGE :
            return action.payload;

        case DELETE_MESSAGE :
            return initialState;

        default : 
            return state
    }
}

export default messageReducer;