export const GET_POST_BEGIN = 'GET_POST_BEGIN';
export const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
export const GET_POST_ERROR = 'GET_POST_ERROR';

export function getPosts() {
    return (dispatch, getState) => {
        dispatch({ type: GET_POST_BEGIN });
        fetch('https://www.reddit.com/r/reactjs.json')
            .then(res => res.json())
            .then(json => {
                dispatch({
                    type: GET_POST_SUCCESS,
                    posts: json.data.children.map(c => c.data)
                })
            })
            .catch(error => {
                dispatch({ type: GET_POST_ERROR, error })
            })
    }
}