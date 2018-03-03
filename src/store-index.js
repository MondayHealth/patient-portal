import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import createHistory from "history/createBrowserHistory";
import thunk from "redux-thunk";
import { routerMiddleware, routerReducer } from "react-router-redux";

import * as reducers from "./reducers";

const rootReducer = combineReducers({
  ...reducers,
  routing: routerReducer
});

export const history = createHistory();

const initialState = {};
const enhancers = [];

if (process.env.NODE_ENV === "development") {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

const middleware = applyMiddleware(thunk, routerMiddleware(history));
const composedEnhancers = compose(middleware, ...enhancers);
export default createStore(rootReducer, initialState, composedEnhancers);
