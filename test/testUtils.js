import { createStore, applyMiddleware } from "redux";
import reducers from "../src/reducers";
import { middlewares } from "../src/configureStore";

export const storeFactory = (initialState) => {
  return createStore(reducers, initialState, applyMiddleware(...middlewares));
};

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};
