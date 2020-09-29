import { AUTH_LOGIN_BEGIN, AUTH_LOGIN_SUCCESS, AUTH_LOGIN_ERROR } from './loginAction';

const initState = {
    loading: false,
    error: null,
    user: [],
    loggedIn: false
}
export const loginReducer = (state = initState, action) => {
    switch (action.type) {
        case AUTH_LOGIN_BEGIN:
            return {
                ...state,
                loading: true,
                loggedIn: false
            }
        case AUTH_LOGIN_SUCCESS: 
            return {
                ...state,
                loading: false,
                loggedIn: true,
                user: action.playload,
                error: null
            }
        case AUTH_LOGIN_ERROR: 
            return {
                ...state,
                loading: false,
                error: action.playload,
                loggedIn: false
            }
        default:
            return state
    }
}