export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export const AddItem = (name) => {
    return {
        type: ADD_ITEM,
        name 
    }
}

export const RemoveItem = (id) => {
    return {
        type: REMOVE_ITEM,
        id 
    }
}
