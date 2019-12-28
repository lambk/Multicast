import { combineReducers, createStore } from 'redux';
import frames from './frames';

const rootReducer = combineReducers({ frames });

export default createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
