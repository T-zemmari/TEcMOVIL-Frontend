import { BUSQUEDA_SEARCH } from '../Types'

const initialState = {

    busqueda: []
}

const BusquedaReducer = (state = initialState, action) => {

    switch (action.type) {

        case BUSQUEDA_SEARCH: {

            return {

                ...state,
                busqueda: action.payload
            }

        }


        default: {
            return state
        }
    }
}

export default BusquedaReducer;