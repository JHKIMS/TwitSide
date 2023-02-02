import { createWrapper } from "next-redux-wrapper";
import { applyMiddleware, compose, configureStore } from "@reduxjs/toolkit";
import reducer from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const configStore = () => {// state와 reducer를 포함하는게 Store이다.
  const middlewares = [];
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));
  const store = configureStore({reducer, enhancer});
  return store;
};
configStore();

const wrapper = createWrapper(configStore, {
  debug: process.env.NODE_ENV === "development",
});

export default wrapper;
