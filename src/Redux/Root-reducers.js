import {combineReducers} from 'redux';
import userReducer from './Reducers/User-reducer';
import smartphoneReducer from './Reducers/Product-reducer';
import accessorioReducer from './Reducers/Accesorios-reducer';



const rootReducer = combineReducers({
    userReducer,
    smartphoneReducer,
    accessorioReducer
 
});

export default rootReducer;