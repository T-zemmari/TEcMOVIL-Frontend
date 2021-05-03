import {SMARTPHONES} from '../Types'

const initialState = {

      smartphones:[]
}

const smartReducer =(state = initialState,action)=>{

    switch(action.type){

        case SMARTPHONES : {

            return {

                ...state,
                smartphones:action.payload
            }
            
        }
        

        default : {
            return state
        }
    }
}

export default smartReducer;