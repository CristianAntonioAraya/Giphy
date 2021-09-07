import { types } from "../types/types"


export const SetMethod = (newMethod) => ({
            type: types.setMethod, 
            payload: newMethod
});
export const SetEndpoint = (newEndpoint) => ({
    type: types.setEndpoint, 
    payload: newEndpoint
});

export const setSearch = (search) => ({
    type: types.setSearch,
    payload: search
});
export const setOffset = (offset) => ({
    type: types.setOffset,
    payload: offset
});
export const setPage = (page) => ({
    type: types.setPage,
    payload: page
});
export const setTotal = (total) => ({
    type: types.setTotal,
    payload: total
});