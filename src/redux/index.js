import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers';
import { Storage } from './storage';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const preloadedState = Storage.load();

const store = createStore(
    reducer,
    preloadedState,
    composeEnhancers(
        applyMiddleware(),
    ),
);

store.subscribe(() => {
    Storage.save(store.getState());
});

export default store;
