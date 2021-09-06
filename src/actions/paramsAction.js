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
})