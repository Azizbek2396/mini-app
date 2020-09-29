import { combineReducers } from 'redux';
import { loginReducer } from './login/loginReducer';
import { counterReducer } from './counter/counterReducer';
import { todoReducer } from './todo/todoReducer';
import { postReducer } from './posts/postReducer';
import courseReducer from './courses/courseReducer';

export const rootReducer = combineReducers({
    login: loginReducer,
    count: counterReducer,
    items: todoReducer,
    posts: postReducer,
    courses: courseReducer
})