import {combineReducers} from 'redux';
import userReducer from './Reducers/User-reducer';
import smartReducer from './Reducers/Smatphones-reducer';
import accessReducer from './Reducers/Accesorios-reducer';
import carritoReducer from './Reducers/Carrito-reducer';
import productReducer from './Reducers/Product-reducer';



const rootReducer = combineReducers({
    userReducer,
    smartReducer,
    accessReducer,
    carritoReducer,
    productReducer

 
});

export default rootReducer;