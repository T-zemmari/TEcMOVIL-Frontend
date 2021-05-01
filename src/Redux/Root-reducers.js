import {combineReducers} from 'redux';
import userReducer from './Reducers/User-reducer';
import smartphonesReducer from './Reducers/Product-reducer';
import accessoriosReducer from './Reducers/Accesorios-reducer';



const rootReducer = combineReducers({
    userReducer,
    smartphonesReducer,
    accessoriosReducer
 
});

export default rootReducer;