import { GET_POST_BEGIN, GET_POST_SUCCESS, GET_POST_ERROR} from './postAction'

const initialState = {
    isLoading: false,
    error: null,
    posts: []
}
export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POST_BEGIN:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case GET_POST_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.error,
                posts: []
            };
        case GET_POST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                posts: action.posts
            };
        default:
            return state;
    }
}

