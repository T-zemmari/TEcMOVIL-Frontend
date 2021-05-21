
import { ACCESSORIOS } from '../Types'

const initialState = {

    accessorios: []
}

const accessReducer = (state = initialState, action) => {

    switch (action.type) {

        case ACCESSORIOS: {

            return {

                ...state,
                accessorios: action.payload
            }

        }


        default: {
            return state
        }
    }
}

export default accessReducer;