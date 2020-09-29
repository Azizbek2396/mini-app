import {ADD_ITEM, REMOVE_ITEM} from './todoAction'

const initialState = [];

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            let item = {
                id: Math.random(),
                name: action.name
            }
            return [...state, item]
        case REMOVE_ITEM:
            return state.filter(item => item.id !== action.id)
        default:
            return state;
    }
}