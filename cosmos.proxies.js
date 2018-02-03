import createFetchProxy from 'react-cosmos-fetch-proxy';
import createRexuProxy from 'react-cosmos-redux-proxy';
import createRouterProxy from 'react-cosmos-router-proxy';

// import { store } from './src/store';

// const ReduxProxy = createReduxProxy({
//     createStore: state => store(state)
// });

export default [
    createFetchProxy(),
    // ReduxProxy,
    createRouterProxy()
];