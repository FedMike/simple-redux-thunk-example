import { ADD_TODOS, SER_ERROR, SET_LOADING } from "./todo-actions";

const initialState = {
    status: 'idle',
    list: [],
    error: null,
};

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODOS:
            return {
                ...state,
                list: action.payload,
                status: 'fullfilled',
            };
        case SET_LOADING:
            return {
                ...state,
                status: 'loading',
                error: null,
            }
        case SER_ERROR:
            return {
                ...state,
                status: 'rejected',
                error: action.payload,
            }
        default:
            return state;
    }
}