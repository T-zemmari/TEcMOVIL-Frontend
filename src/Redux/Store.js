import {applyMiddleware, compose, createStore} from 'redux';
import { save, load } from "redux-localstorage-simple";
import rootReducer from './Root-reducers';


const createStoreWithMiddleware = applyMiddleware(
	save({state: ['data']})
)(createStore);

const store = createStoreWithMiddleware(
    rootReducer,
    load({
        preloadState : {
            user : {},
            smartphones :{},
            accessorios:{}
        },
        state: ['data']
    }),
    // eslint-disable-next-line
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({
        trace: true,
    // eslint-disable-next-line
    }) || compose
);

export default store;