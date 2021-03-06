import { createStore, applyMiddleware, compose  } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import { rootReducer } from './rootReducer';
import {loadCourses} from './courses/courseAction'

const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            trace: true
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(logger,thunk),
);
const store = createStore(rootReducer, enhancer);
store.dispatch(loadCourses());

export default store