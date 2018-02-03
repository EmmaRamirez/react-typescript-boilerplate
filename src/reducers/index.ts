import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

export const reducers:{ [name: string]: any } = {
    router: routerReducer
};

export const appReducers:any = combineReducers(reducers);