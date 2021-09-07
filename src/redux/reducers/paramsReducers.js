import { types } from "../types/types";

const initialState = {
    method: 'trending',
    search: null,
    limit: 20,
    offset: 0,
    endpoint: 'gifs',
    page: 1,
    total: null
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
        case types.setOffset:
            return{
                ...state,
                offset: action.payload,
            }
        case types.setPage:
            return{
                ...state,
                page: action.payload,
            }
        case types.setTotal:
            return{
                ...state,
                total: action.payload,
            }

        default:
            return state;
    }
}