import { legacy_createStore } from "redux";
import { compose } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;

if (window.Cypress) {
    window.store = store;
}
