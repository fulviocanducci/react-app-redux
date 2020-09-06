import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

const reducers = combineReducers({ counter: counter, todos: todos });

export default reducers;
