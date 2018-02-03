import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
// @ts-ignore no @types module
import createHistory from 'history/createBrowserHistory';
// @ts-ignore no @types module
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';
// @ts-ignore no @types module
import { persistCombineReducers, persistStore } from 'redux-persist';
// @ts-ignore no @types module
import storage from 'redux-persist/lib/storage';

import { reducers } from 'reducers';
import { rootSaga } from 'sagas';

const config = {
  key: 'root',
  blacklist: ['router'],
  storage
};

const history = createHistory();

const persistReducers = persistCombineReducers(config, reducers);

const loggerMiddleware = createLogger();
const sagaMiddleware = createSagaMiddleware();
const routerMiddleware = createRouterMiddleware(history);

export const store:any = createStore(
  persistReducers,
  applyMiddleware(
    loggerMiddleware,
    sagaMiddleware,
    routerMiddleware
  )
);

export const persistor = persistStore(
  store,
  undefined,
  () => store.getState()
);

sagaMiddleware.run(rootSaga);