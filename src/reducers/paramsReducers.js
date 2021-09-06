import { types } from "../types/types";

const initialState = {
    method: 'trending',
    search: null,
    limit: 20,
    offset: 0,
    endpoint: 'gifs',
}

export const ParamsReducer = (state= initialState,action) => {

    switch (action.type) {
        case types.setMethod: 
            return{
                ...state, 
                method: action.payload
            }
        case types.setEndpoint: 
            return{
                ...state, 
                endpoint: action.payload
        }
        case types.setSearch:
            return{
                ...state,
                search: action.payload,
            }

        default:
            return state;
    }
}