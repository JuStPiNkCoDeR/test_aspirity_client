import { combineReducers } from 'redux';
import * as reducers from './reducers';

const app = combineReducers(reducers);

export default app;