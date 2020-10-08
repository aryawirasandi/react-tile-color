import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import gridReducer from "../features/Grid/reducer";
import thunk from "redux-thunk";
// combine all reducer
let rootReducer = combineReducers({
    grid : gridReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create store from all combined reducer
let store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

export default store;