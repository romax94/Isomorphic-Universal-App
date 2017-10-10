import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';

const configureStore = initialStore => {
    return createStore(
        rootReducer,
        initialStore,
        composeWithDevTools()
    )
};

export default configureStore;