import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import app from '../reducers';

const isDev = process.env.NODE_ENV === 'development';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = isDev ?
    createStore(
        app,
        composeEnhancers(
            applyMiddleware(thunk),
        ),
    ) :
    createStore(app, applyMiddleware(thunk));

export default store;
