import { createStore,applyMiddleware,compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { ParamsReducer } from "../reducers/paramsReducers";

const composeEnhancers = (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    params : ParamsReducer
});

export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
    );

