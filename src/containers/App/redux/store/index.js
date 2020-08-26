import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import app from '../reducers';

const store = createStore(app, applyMiddleware(thunk));

export default store;
