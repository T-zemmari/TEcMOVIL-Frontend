import {combineReducers} from 'redux';
import userReducer from './Reducers/User-reducer';
import smartphoneReducer from './Reducers/Smatphones-reducer';
import accessorioReducer from './Reducers/Accesorios-reducer';
import carritoReducer from './Reducers/Carrito-reducer';
import productReducer from './Reducers/Product-reducer';



const rootReducer = combineReducers({
    userReducer,
    smartphoneReducer,
    accessorioReducer,
    carritoReducer,
    productReducer

 
});

export default rootReducer;