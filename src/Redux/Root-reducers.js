import {combineReducers} from 'redux';
import userReducer from './Reducers/User-reducer';
import smartReducer from './Reducers/Smatphones-reducer';
import accessReducer from './Reducers/Accesorios-reducer';
import carritoReducer from './Reducers/Carrito-reducer';
import productReducer from './Reducers/Product-reducer';
import BusquedaReducer from './Reducers/Busqueda-reducer';
import cartItem from '../components/Accion/reducers/reducer';
import messageReducer from '../Redux/Reducers/Message-reducer';

const rootReducer = combineReducers({
    userReducer,
    smartReducer,
    accessReducer,
    carritoReducer,
    productReducer,
    BusquedaReducer,
    messageReducer,
    cartItem

 
});

export default rootReducer;