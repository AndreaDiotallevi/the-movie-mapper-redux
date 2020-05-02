import checkPropTypes from "check-prop-types";
import { createStore, applyMiddleware } from "redux";
import reducers from "../src/reducers";
import { middlewares } from "../src/configureStore";

export const storeFactory = (initialState) => {
  return createStore(reducers, initialState, applyMiddleware(...middlewares));
};

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    "prop",
    component.name
  );
  expect(propError).toBeUndefined();
};
