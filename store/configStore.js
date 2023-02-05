import { createWrapper } from "next-redux-wrapper";
import { applyMiddleware, compose, configureStore } from "@reduxjs/toolkit";
import reducer from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from '../sagas';

const configStore = () => {// state와 reducer를 포함하는게 Store이다.
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));
  const store = configureStore(reducer, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};
configStore();

const wrapper = createWrapper(configStore, {
  debug: process.env.NODE_ENV === "development",
});

export default wrapper;
